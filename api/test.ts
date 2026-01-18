// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// async function main() {
//   console.time("seed")
//   await prisma.$queryRaw`SELECT 1+1 AS test;`
//   console.timeEnd("seed")
//   console.log("Seed minimal OK")
// }

// main().finally(() => prisma.$disconnect())



// schema : 

// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// // Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// // Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider = "mysql"
// }

// model User {
//   id    Int     @id @default(autoincrement())
//   username  String
//   email String  @unique
// }


// seed :

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//     await prisma.user.deleteMany()

//     await prisma.$executeRawUnsafe(
//         "ALTER TABLE User AUTO_INCREMENT = 1;"
//     );


//     await prisma.user.createMany({
//         data: [
//             { username: "admin", email: "admin@gmail.com" },
//             { username: "user", email: "user@gmail.com" }
//         ]
//     })
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })