import "dotenv/config";
import {Router} from 'express'
import type { Request, Response } from 'express'
import prisma from "./client.js"
import { authenticateToken } from "./middleware/auth.js";


export const userRouter = Router()


userRouter.get('/', authenticateToken, async (_req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})


userRouter.get('/:id', authenticateToken, async (req: Request<{ id: string }>, res: Response) => {
    const userId = req.params.id
    const user = await prisma.user.findUnique({
        where: {id: parseInt(userId)}
    })

    if (!user) {
        return res.status(404).json({error: "Utilisateur non trouvé"})
    }

    res.status(200).json(user)
})


userRouter.post('/create', authenticateToken, async (req: Request, res: Response) => {
    const {username, email, password} = req.body
    
    try {
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password
            }
        })

        res.status(201).json({
            message: "Utilisateur créé avec succès",
            user: user
        })
    }

    catch (error: any) {
        res.status(400).json({error: error.message})
    }
})


userRouter.post("/update/:id", authenticateToken, async (req: Request<{ id: string }>, res: Response) => {
    try {
        const userToUpdate = await prisma.user.findUnique({
            where: {id: parseInt(req.params.id)}
        })
    
        if (!userToUpdate) {
            return res.status(404).json({error: "Utilisateur non trouvé"})
        }
    
        const data = req.body
    
        const user = await prisma.user.update({
            where: {id: parseInt(req.params.id)},
            data: data
        })
    
        res.status(200).json({
            message: "Utilisateur mis à jour avec succès",
            user: user
        })
    }
    

    catch (error: any) {
        res.status(400).json({error: error.message})
    }
})


userRouter.delete("/delete/:id", authenticateToken, async (req: Request<{ id: string }>, res: Response) => {
    try {
        const userToDelete = await prisma.user.findUnique({
            where: {id: parseInt(req.params.id)}
        })

        if (!userToDelete) {
            return res.status(404).json({error: "Utilisateur non trouvé"})
        }

        const userDeleted = await prisma.user.delete({
            where: {id: parseInt(req.params.id)}
        })

        res.status(200).json({
            message: "Utilisateur supprimé avec succès",
            user: userDeleted
        })
    }

    catch (error: any) {
        res.status(400).json({error: error.message})
    }
})
