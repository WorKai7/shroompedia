import { Router } from 'express'
import type {Request, Response} from "express"
import jwt from 'jsonwebtoken'
import prisma from "./client.js";
import { env } from "prisma/config"

export const authRouter = Router()

// POST /auth/login
// Accessible via POST /auth/login
authRouter.post('/login', async (req: Request, res: Response) => {
    const {email, password} = req.body

    try {
        // 1. Vérifier que l'utilisateur existe
        const user = await prisma.user.findUnique({
            where: {email},
        })

        if (!user) {
            return res.status(401).json({error: 'Email ou mot de passe incorrect'})
        }

        // 2. Vérifier le mot de passe
        const isPasswordValid = password === user.password

        if (!isPasswordValid) {
            return res.status(401).json({error: 'Email ou mot de passe incorrect'})
        }

        // 3. Générer le JWT
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
            },
            env("JWT_SECRET") as string,
            {expiresIn: '1h'}, // Le token expire dans 1 heure
        )

        // 4. Retourner le token
        return res.status(200).json({
            message: 'Connexion réussie',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        })
    } catch (error) {
        console.error('Erreur lors de la connexion:', error)
        return res.status(500).json({error: 'Erreur serveur'})
    }
})
