const productsSales = (products, orders) => {
    let sales = []
    let productsIds
    if (orders.length > 0 && products.length > 0) {
        productsIds = [...new Set(orders?.map((order) => order?.products.map((product) => product.product._id)).flat())]
        //Just don't look at this
        for (let i = 0; i < productsIds.length; i++) {
            let product_id = productsIds[i];
            for (let j = 0; j < orders.length; j++) {

                for (let k = 0; k < orders[j].products.length; k++) {
                    let order_product_id = orders[j].products[k].product._id
                    let order_product_price = orders[j].products[k].product.price
                    let order_product_quantity = orders[j].products[k].quantity

                    if (product_id === order_product_id) {
                        sales.push({
                            product_id: order_product_id,
                            price: order_product_price,
                            quantity: order_product_quantity
                        })

                    }
                }

            }
        }
    }



    return sales;
}

export default productsSales