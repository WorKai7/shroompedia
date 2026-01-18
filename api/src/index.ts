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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/images', express.static(path.join(__dirname, '../images')));

const port = 3000

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Shroompedia API Documentation"
}))

app.get('/', (_req, res) => {
    res.status(200).send('Bienvenue sur le serveur HTTP')
})

app.use('/users', userRouter)
app.use("/shrooms", shroomRouter)
app.use("/auth", authRouter)

app.listen(port, () => {
    console.log(`Mon serveur démarre sur le port ${port}`)
})
