import { PrismaClient } from '@prisma/client';

// Export a single PrismaClient instance to be shared across the app
const prisma: PrismaClient = new PrismaClient();

export default prisma;
