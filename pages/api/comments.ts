import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req, res);
    const { body, isAnonymous } = req.body;
    const { postId } = req.query;

    if (!postId || typeof postId !== 'string') {
      throw new Error('Invalid ID');
    }

    const comment = await prisma.comment.create({
      data: {
        body,
        isAnonymous,
        userId: currentUser.id,
        postId
      }
    });

    // Send notification to post owner
    try {
      const post = await prisma.post.findUnique({
        where:{
          id: postId
        }
      });

      let body;
      if (isAnonymous) {
        body = `${currentUser?.codename} commented your post`;
      } else {
        body = `${currentUser?.name} commented your post`;
      }

      if (post?.userId ) {
        await prisma.notification.create({
          data: {
            userId: post.userId,
            body: body,
          }
        });

        await prisma.user.update({
          where: {id : post.userId},
          data: {
            hasNotification: true
          }
        });
      }

    } catch (error) {
      console.log(error);
    }

    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}