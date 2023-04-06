import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if ( req.method !== 'POST' && req.method !== 'DELETE' ) {
        return res.status(405).end();
    }

    try {
        const {userId}  = req.body;
        const {currentUser} = await serverAuth(req, res);
        
        if (!userId || typeof userId !== 'string') {
           throw new Error('Invalid user id');
        }

        const user = await prisma.user.findUnique({
            where:{
                id: userId
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        let updateFollowingIds = [...(currentUser.followingIds || [])];

        if (req.method === 'POST') {
            updateFollowingIds.push(userId);

            // Send notification to post owner
      try {

          await prisma.notification.create({
            data: {
              userId: userId,
              body: `${currentUser?.name} Followed you`,
            }
          });

          await prisma.user.update({
            where: {id : userId},
            data: {
              hasNotification: true
            }
          });

      } catch (error) {
        console.log(error);
      }
        }

        if (req.method === 'DELETE') {
            updateFollowingIds = 
            updateFollowingIds.filter(
                id => 
                id !== userId
                );
        }


        const updatedUser = await prisma.user.update({
            where:{
                id: currentUser.id
            },
          data:{
                followingIds: updateFollowingIds
          }   
        });

        
    } catch (error) {
        console.log(error);
        return res.status(400).end();
        
    } finally{

    }

}