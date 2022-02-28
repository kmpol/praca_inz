import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import productRouter from './routes/products.js'
import userRouter from './routes/users.js'
import orderRouter from './routes/orders.js'
import sliderRouter from './routes/slider.js'
import categoryRouter from './routes/categories.js'
import returnRouter from './routes/returns.js'
import complaintRouter from './routes/complaints.js'

import createCheckoutSession from './routes/checkout.js'
import webhook from './routes/webhook.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// app.use(express.json({
//     verify: (req, res, buffer) => req['rawBody'] = buffer
// }))
app.use(cors())

app.use(express.json({
    verify: function (req, res, buf) {
        var url = req.originalUrl;
        if (url.startsWith('/webhook')) {
            req.rawBody = buf.toString();
        }
    },
    limit: '10mb', extended: true
}));

app.use(express.json({}));
app.use(express.urlencoded({ limit: '10mb', parameterLimit: 100000, extended: true }));


app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/sliders', sliderRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/returns', returnRouter)
app.use('/api/complaints', complaintRouter)

//Stripe payment - no router
app.post('/api/create-checkout-session', createCheckoutSession)
app.post('/webhook', webhook)

app.get('/', (req, res) => {
    res.send("Hello to myShop API")
})

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

