import stripeAPI from '../utils/stripe.js'
import dotenv from 'dotenv'
dotenv.config()

const createCheckoutSession = async (req, res) => {
    const domainUrl = process.env.WEB_APP_URL
    const { line_items, customer_email, client_reference_id } = req.body;
    if (!line_items || !customer_email) return res.status(400).send({ error: 'Invalid parameters' })

    let session;

    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            client_reference_id,
            line_items,
            customer_email,
            success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainUrl}/canceled`,
            shipping_address_collection: {
                allowed_countries: ['PL']
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 500,
                            currency: 'usd',
                        },
                        display_name: 'Dostawa standardowa kurierem - 5USD',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 1,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 3,
                            },
                        }
                    }
                }
            ],
        })

        res.status(200).send({ sessionId: session.id, })
    } catch (e) {
        console.log(e)
        res.status(400).send({ e: "An error occured! Unavle to create session" })
    }
}

export default createCheckoutSession