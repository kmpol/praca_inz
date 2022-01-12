import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'

import { createSlider, getSliders, getSlider, updateQueueSlider, updateSliderStatus, updateSlider, removeSlider } from '../controllers/slider.js'

const router = express.Router()

router.post('/', authAdmin, createSlider)
router.get('/', getSliders)
router.get('/:id', getSlider)
router.put('/:id', updateSlider)
router.delete('/:id', removeSlider)
router.put('/queue/:id', updateQueueSlider)
router.put('/status/:id', updateSliderStatus)


export default router