import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  const glob = global as any;
  if (!glob.prisma) {
    glob.prisma = new PrismaClient();
  }
  prisma = glob.prisma;
}

export default prisma;
