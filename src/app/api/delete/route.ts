import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest){
    
    const body = await req.json();
    const {id} = body;
    await prisma.todoList.delete({
        where: {
            id
        }

    })
}