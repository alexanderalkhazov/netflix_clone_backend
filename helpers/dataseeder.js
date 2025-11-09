import { PrismaClient } from '@prisma/client';
// import { Users } from '../db/Users';

const prisma = new PrismaClient();

async function main() {
    const users = [
        { id: '1', name: 'Murat', imageUrl: '/ProfilePicture.png', createdAt: new Date(), updatedAt: new Date() },
        { id: '2', name: 'Alex', imageUrl: '/ProfilePicture (1).png', createdAt: new Date(), updatedAt: new Date() },
        { id: '3', name: 'Marcus', imageUrl: '/ProfilePicture (2).png', createdAt: new Date(), updatedAt: new Date() },
        { id: '4', name: 'james', imageUrl: '/ProfilePicture (3).png', createdAt: new Date(), updatedAt: new Date() },
    ];

    for (const u of users) {
        await prisma.user.upsert({
            where: { id: u.id },
            update: {},
            create: u,
        });
    }

    console.log('Seed complete');
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(() => prisma.$disconnect());