import Product from '../models/Product.js'

export const createProduct = async (req, res) => {
    const product = new Product({ ...req.body })
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const setProductPicture = async (req, res) => {
    const productId = req.params.id

    try {
        const product = await Product.findById(productId)
        product.img = req.file.buffer
        await product.save()
        res.send()
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// GET /api/products/:id
export const getProduct = async (req, res) => {
    const _id = req.params.id

    try {
        const product = await Product.findById(_id)
        if (!product) {
            return res.status(404).send()
        }
        res.status(200).send(product)

    } catch (e) {
        res.status(500).send(e.message)
    }
}

// GET /api/products
export const getProducts = async (req, res) => {
    const filters = {
        ...req.query
    }
    try {
        const products = await Product.find(filters)
        console.log(filters)
        res.status(200).send(products)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const disableOrEnableProductSale = async (req, res) => {
    const id = req.params.id
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(200).send(updatedProduct)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id

    const incomingUpdates = Object.keys(req.body)
    const allowedUpdates = ['name', 'description', 'mainCategory', 'gender', 'size', 'color', 'price', 'img', 'itemsInStock']
    const isValidUpdate = incomingUpdates.every((update) => allowedUpdates.includes(update))

    if (!isValidUpdate) return res.status(400).send({ error: "Invalid updates!" })

    try {
        const product = await Product.findById(id)

        if (!product) return res.status(404).send({ error: "Product not found!" })

        incomingUpdates.forEach((update) => product[update] = req.body[update])
        await product.save()

        res.status(200).send(product)
    } catch (e) {
        res.status(500).send(e.message)
    }
}