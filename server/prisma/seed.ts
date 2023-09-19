import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
    await prisma.employee.upsert({
        where: { email: 'Moss@ReynoldsIndustry.com' },
        update: {},
        create: { 
            email: 'Moss@ReynoldsIndustry.com',
            firstName: 'Maruice',
            familyName: 'Moss',
            position: 'IT',
            knowAs: 'Moss',
            dateJoined: new Date(2002, 1, 1)
        }
    })

    await prisma.employee.upsert({
        where: { email: 'Jen@ReynoldsIndustry.com' },
        update: {},
        create: { 
            email: 'Jen@ReynoldsIndustry.com',
            firstName: 'Jenifer',
            familyName: 'Barber',
            position: 'IT Manager',
            knowAs: 'Jen',
            dateJoined: new Date(2006, 1, 1)
        }
    })

    await prisma.employee.upsert({
        where: { email: 'Roy@ReynoldsIndustry.com' },
        update: {},
        create: { 
            email: 'Roy@ReynoldsIndustry.com',
            firstName: 'Roy',
            familyName: 'Irish',
            position: 'IT',
            knowAs: 'Roy',
            dateJoined: new Date(2003, 1, 1)
        }
    })

    await prisma.employee.upsert({
        where: { email: 'Richmond@ReynoldsIndustry.com' },
        update: {},
        create: { 
            email: 'Richmond@ReynoldsIndustry.com',
            firstName: 'Richmond',
            familyName: 'Avenal',
            position: 'IT Basement',
            knowAs: 'Richmond',
            dateJoined: new Date(1998, 3, 1)
        }
    })

    await prisma.employee.upsert({
        where: { email: 'Douglas@ReynoldsIndustry.com' },
        update: {},
        create: { 
            email: 'Douglas@ReynoldsIndustry.com',
            firstName: 'Douglas',
            familyName: 'Reynolds',
            position: 'CEO',
            knowAs: 'Douglas',
            dateJoined: new Date(1996, 6, 1)
        }
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
