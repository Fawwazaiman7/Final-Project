import { PrismaClient } from "@prisma/client";

const globalforPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prisma: PrismaClient;

prisma = typeof window === "undefined" 
   ? globalforPrisma.prisma?? new PrismaClient()
    : (undefined as unknown as PrismaClient);

if (process.env.NODE_ENV!== 'production') globalforPrisma.prisma = prisma;