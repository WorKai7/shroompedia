import "dotenv/config";
import {Router} from 'express'
import type { Request, Response } from 'express'
import prisma from "./client.js"
import { authenticateToken } from "./middleware/auth.js";


export const shroomRouter = Router()


shroomRouter.get('/', authenticateToken, async (_req: Request, res: Response) => {
    const shrooms = await prisma.shroom.findMany()
    res.status(200).json(shrooms)
})


shroomRouter.get('/:id', authenticateToken, async (req: Request<{ id: string }>, res: Response) => {
    const shroomId = req.params.id
    const shroom = await prisma.shroom.findUnique({
        where: {id: parseInt(shroomId)}
    })

    if (!shroom) {
        return res.status(404).json({error: "Shroom non trouvé"})
    }

    res.status(200).json(shroom)
})


shroomRouter.post('/create', authenticateToken, async (req: Request, res: Response) => {
    const {name, sprite, description} = req.body
    
    try {
        const shroom = await prisma.shroom.create({
            data: {
                name: name,
                sprite: sprite,
                description: description
            }
        })

        res.status(201).json({
            message: "Shroom créé avec succès",
            shroom: shroom
        })
    }

    catch (error: any) {
        res.status(400).json({error: error.message})
    }
})


shroomRouter.post("/update/:id", authenticateToken, async (req: Request<{ id: string }>, res: Response) => {
    try {
        const shroomToUpdate = await prisma.shroom.findUnique({
            where: {id: parseInt(req.params.id)}
        })
    
        if (!shroomToUpdate) {
            return res.status(404).json({error: "Shroom non trouvé"})
        }
    
        const data = req.body
    
        const shroom = await prisma.shroom.update({
            where: {id: parseInt(req.params.id)},
            data: data
        })
    
        res.status(200).json({
            message: "Shroom mis à jour avec succès",
            shroom: shroom
        })
    }
    

    catch (error: any) {
        res.status(400).json({error: error.message})
    }
})


shroomRouter.delete("/delete/:id", authenticateToken, async (req: Request<{ id: string }>, res: Response) => {
    try {
        const shroomToDelete = await prisma.shroom.findUnique({
            where: {id: parseInt(req.params.id)}
        })

        if (!shroomToDelete) {
            return res.status(404).json({error: "Shroom non trouvé"})
        }

        const shroomDeleted = await prisma.shroom.delete({
            where: {id: parseInt(req.params.id)}
        })

        res.status(200).json({
            message: "Shroom supprimé avec succès",
            shroom: shroomDeleted
        })
    }

    catch (error: any) {
        res.status(400).json({error: error.message})
    }
})
