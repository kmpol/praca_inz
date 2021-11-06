import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import productRouter from './routes/products.js'
import userRouter from './routes/users.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors())

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

mongoose
    .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database successfully connected')
            console.log(`Server is up on port ${PORT}`)
        })
    }).catch((error) => {
        console.error(error.message)
    })

