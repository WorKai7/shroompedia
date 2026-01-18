import express from 'express'
import {userRouter} from './user.route.js'
import { shroomRouter } from "./shroom.route.js"

export const app = express()

const port = 3000

app.use(express.json())

app.get('/', (_req, res) => {
    res.status(200).send('Bienvenue sur le serveur HTTP')
})

app.use('/users', userRouter)
app.use("/shrooms", shroomRouter)

app.listen(port, () => {
    console.log(`Mon serveur démarre sur le port ${port}`)
})
