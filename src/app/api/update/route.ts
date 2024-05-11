import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest){
    
    const body = await req.json();
    const {id , nama, kelas, prodi, jurusan, done} = body;
    await prisma.todoList.update({
        where: {id},
        data: {nama,kelas,prodi,jurusan,done}
    })
}