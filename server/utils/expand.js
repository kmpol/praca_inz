import dotenv from 'dotenv'
dotenv.config()
import getData from './getFetch.js'

import stripeAPI from './stripe.js';


export const getStripeProducts = async (sessionId) => {
    const session = await stripeAPI.checkout.sessions.retrieve(
        sessionId,
        {
            expand: ['line_items'],
        }
    );

    const products = session.line_items.data
    return products
}
