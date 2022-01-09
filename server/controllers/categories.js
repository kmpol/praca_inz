import Category from '../models/Category.js'

export const createCategory = async (req, res) => {
    const category = new Category({ ...req.body })
    try {
        await category.save()
        res.status(201).send(category)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({})
        res.status(200).send(categories)
    } catch (e) {
        res.status(500).send(e)
    }
}