import prisma from "../src/client.js"

async function main() {
    await prisma.user.deleteMany()
    await prisma.shroom.deleteMany()

    await prisma.user.createMany({
        data: [
            {
                username: "admin",
                email: "admin@admin.com"
            },
            {
                username: "user",
                email: "user@user.com"
            }
        ]
    })

    await prisma.shroom.createMany({
        data: [
            {
                name: "Classic Shroom",
                sprite: "images/towers/classic_shroom1.png",
                description: "Le Classic Shroom est le champignon de base de ShroomTD, simpliste, mais efficace ! À l'aide des ses projectiles rouges à points blancs ainsi que de sa bouche ultra extensible, il déraille les ennemis un à un sans aucun scrupule."
            }
        ]
    })

    console.log("Seed terminé !")
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })