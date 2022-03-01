import ShopConfig from "../models/ShopConfig.js"

export const createShopConfig = async (req, res) => {
    try {
        await ShopConfig.isConfigExists()
        const shopConfig = new ShopConfig(req.body)
        await shopConfig.save()
        res.status(200).send(shopConfig)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const getShopConfig = async (req, res) => {
    try {
        const shopConfig = await ShopConfig.findOne()
        if (!shopConfig) return res.status(404).send({ error: "Config not found" })
        res.status(200).send(shopConfig)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const updateShopConfig = async (req, res) => {
    try {
        const shopConfig = await ShopConfig.findOne()
        const id = shopConfig._id
        const updatedShopConfig = await ShopConfig.findOneAndUpdate(id, req.body, { new: true })
        res.status(200).send(updatedShopConfig)
    } catch (e) {
        res.status(500).send(e.message)

    }
}