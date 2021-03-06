import Slider from '../models/Slider.js'

export const createSlider = async (req, res) => {
    const slider = new Slider({ ...req.body })
    try {
        await slider.save()
        res.status(201).send(slider)
    } catch (e) {
        res.status(500).send(e)
    }
}

export const getSliders = async (req, res) => {
    try {
        const sliders = await Slider.find({})
        if (!sliders) return req.status(404).send({ error: 'sliders not found / do not exists' })
        res.status(200).send(sliders)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const getSlider = async (req, res) => {
    const id = req.params.id
    try {
        const slider = await Slider.findById(id)
        if (!slider) return req.status(404).send({ error: 'slider not found' })
        res.status(200).send(slider)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const updateQueueSlider = async (req, res) => {
    const id = req.params.id
    const queue = req.body.queue
    try {
        const slider = await Slider.findById(id)
        if (!slider) return req.status(404).send({ error: 'slider not found / do not exists' })
        slider.queue = queue
        await slider.save()
        res.status(200).send(slider)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const updateSliderStatus = async (req, res) => {
    const id = req.params.id
    const status = req.body.isActive
    try {
        const slider = await Slider.findById(id)
        if (!slider) return req.status(404).send({ error: 'slider not found / do not exists' })
        slider.isActive = status
        await slider.save()
        res.status(200).send(slider)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const updateSlider = async (req, res) => {
    const id = req.params.id
    try {
        const newSlider = await Slider.findByIdAndUpdate(id, {
            ...req.body
        }, {
            new: true
        })
        res.status(200).send(newSlider)
    } catch (e) {
        res.status(500).send(e.message)

    }
}

export const removeSlider = async (req, res) => {
    const id = req.params.id
    try {
        const removedSlider = await Slider.findByIdAndRemove(id)
        res.status(200).send(removedSlider)
    } catch (e) {
        res.status(500).send(e.message)

    }
}