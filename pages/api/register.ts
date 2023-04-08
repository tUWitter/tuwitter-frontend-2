import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import { uniqueNamesGenerator, Config, names, starWars, animals } from 'unique-names-generator';
import prisma from '@/libs/prismadb';

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) {
    if (req.method !== 'POST'){
        return res.status(405).end();
    }

    try{
        const{email, username, name, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const config : Config = {
            dictionaries: [names, starWars, animals],
            length: 1,
        };
 
        const codename: string = "Anonymous "  + uniqueNamesGenerator(config);

        const user = await prisma.user.create({
            data:{
                email,
                username,
                name,
                codename,
                hashedPassword
            }
        });

        return res.status(200).json(user);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }

}