import fetch from 'node-fetch'

async function getData(url = "https://api.stripe.com/v1/products/prod_KaToMXWoCeTdMn") {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${process.env.STRIPE_KEY}`
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer'
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export default getData