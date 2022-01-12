import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'

import { createSlider, getSliders, updateQueueSlider, updateSliderStatus } from '../controllers/slider.js'

const router = express.Router()

router.post('/', authAdmin, createSlider)
router.get('/', getSliders)
router.put('/queue/:id', updateQueueSlider)
router.put('/status/:id', updateSliderStatus)


export default router