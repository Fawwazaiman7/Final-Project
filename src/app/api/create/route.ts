import { NextRequest } from "next/server";
import { prisma } from 'C:\Users\M Fawwaz\Documents\CSC\Final Project\prisma'
export async function POST(req: NextRequest) {
    const data = await req.json();
    const newUser = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: null,
        }})}