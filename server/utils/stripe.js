import stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

const stripeAPI = stripe(process.env.STRIPE_KEY)

export default stripeAPI