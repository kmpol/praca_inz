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
            return res.status(404).send({ message: 'Product has been not found!' })
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
        res.status(500).send(e)
    }
}
