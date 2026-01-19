import prisma from "../src/client.js"

// Seed permettant de peupler la base de données avec des données de base
async function main() {
    // Suppression de tout
    await prisma.user.deleteMany()
    await prisma.shroom.deleteMany()

    // Création des données de base
    await prisma.user.createMany({
        data: [
            {
                username: "admin",
                email: "admin@admin.com",
                password: "admin"
            },
            {
                username: "user",
                email: "user@user.com",
                password: "password123"
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