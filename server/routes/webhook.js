import stripe from 'stripe';
import dotenv from 'dotenv'
import postData from '../utils/fetch.js'
import { getStripeProducts } from '../utils/expand.js'
import getDataInfo from '../utils/getFetch.js'

dotenv.config()
stripe(process.env.STRIPE_KEY)

const getMyPRODUCTS = async (converted) => {
    const array = []
    console.log('converted', converted)
    for (let i = 0; i < converted.length; i++) {
        console.log('converted[i]', converted[i])
        const id = converted[i].product_id
        const quantity = converted[i].quantity
        const unit_price = converted[i].price
        const response = await getDataInfo(`https://api.stripe.com/v1/products/${id}`)
        console.log('response', response)
        array.push({
            product: response.metadata.productId,
            quantity,
            unit_price
        })
    }
    console.log('array', array)
    return array
}

const createOrder = async (info) => {
    await postData(process.env.WEB_APP_URL_SERVER + "/api/orders", info)
    // .then(data => {
    //     console.log('DATA', data); // JSON data parsed by `data.json()` call
    // }).catch((e) => {
    //     console.log(e)
    // })
}
const webhook = async (request, response) => {
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
        case 'checkout.session.completed':
            const session = event.data.object

            let products;
            try {
                products = await getStripeProducts(session.id)
                console.log('products', products)
            } catch (e) {

            }
            const converted = products.map((product) => ({
                product_id: product.price.product,
                quantity: product.quantity,
                price: product.price.unit_amount
            }))
            let myProductsId;
            let info;

            try {
                myProductsId = await getMyPRODUCTS(converted)
                console.log('myProductsId', myProductsId)
                info = {
                    address: {
                        name: session.shipping.name,
                        ...session.shipping.address,
                        email: session.customer_email
                    },
                    payment: {
                        amount: session.amount_total,
                        currency: session.currency,
                        shipping_amount: session.total_details.amount_shipping
                    },
                    status: "new",
                    owner: session.client_reference_id,
                    products: myProductsId
                }

            } catch (e) {

            }
            console.log('info', info)
            await createOrder(info)

        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
}

export default webhook