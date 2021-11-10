import stripe from 'stripe';
import dotenv from 'dotenv'
import postData from '../utils/fetch.js'

dotenv.config()
stripe(process.env.STRIPE_KEY)

const webhook = (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (process.env.WEB_HOOK_SECRET) {
        // Get the signature sent by Stripe
        const signature = request.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                request.rawBody,
                signature,
                process.env.WEB_HOOK_SECRET
            );
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`, err.message);
            return response.sendStatus(400);
        }
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
            // Then define and call a method to handle the successful payment intent.
            // handlePaymentIntentSucceeded(paymentIntent);
            break;
        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            // Then define and call a method to handle the successful attachment of a PaymentMethod.
            // handlePaymentMethodAttached(paymentMethod);
            break;
        case 'checkout.session.completed':
            const session = event.data.object

            const info = {
                address: {
                    name: session.shipping.name,
                    ...session.shipping.address,
                    email: session.customer_email
                },
                payment: {
                    amount: session.amount_total,
                    currency: session.currency
                },
                status: "new",
                owner: session.client_reference_id
            }

            console.log('INFO', info)
            console.log("SESSION", session)

            postData(process.env.WEB_APP_URL_SERVER + "/api/orders", info)
                .then(data => {
                    console.log('DATA', data); // JSON data parsed by `data.json()` call
                }).catch((e) => {
                    console.log(e)
                })

        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
}

export default webhook