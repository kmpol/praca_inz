import Return from "../models/Return.js"

export const createReturn = async (req, res) => {
    try {
        const oryginal_order = req.params.id
        const user = req.user
        const products = [...req.body.products]

        const _return = new Return({ owner: user._id, oryginal_order, products })
        await _return.save()
        res.status(200).send(_return)
    } catch (e) {
        res.status(500).send(e)
    }


}

export const getReturns = async (req, res) => {
    try {
        const user = req.user
        const userReturns = await Return.find({ owner: user._id })
        if (!userReturns) {
            return res.status(404).send({ error: "Returns not found" })
        }
        res.status(200).send(userReturns)
    } catch (e) {
        res.status(500).send(e)
    }
}