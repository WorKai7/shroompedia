import express from 'express'
import {userRouter} from './user.route.js'
import { shroomRouter } from "./shroom.route.js"
import { authRouter } from "./auth.route.js"
import swaggerUi from 'swagger-ui-express'
import {swaggerDocument} from './docs/index.js'
import cors from "cors";
import path from 'path'
import { fileURLToPath } from 'url';

export const app = express()

// Récupération du nom du dossier courant pour l'usage des images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir les images sur la route /images
app.use('/images', express.static(path.join(__dirname, '../images')));

const port = 3000

// Gestion des erreurs cors
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Parseur JSON
app.use(express.json())

// Route de documentation swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Shroompedia API Documentation"
}))

// Route d'accueil
app.get('/', (_req, res) => {
    res.status(200).send('Bienvenue sur le serveur HTTP')
})

// Utilisation des routeurs
app.use('/users', userRouter)
app.use("/shrooms", shroomRouter)
app.use("/auth", authRouter)

// Ecoute du serveur
app.listen(port, () => {
    console.log(`Mon serveur démarre sur le port ${port}`)
})
