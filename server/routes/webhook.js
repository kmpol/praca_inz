import stripe from 'stripe';
import dotenv from 'dotenv'
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
            const session = event.data.object;
            console.log('event data', session)
        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
}

export default webhook