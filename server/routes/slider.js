import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'

import { createSlider, getSliders } from '../controllers/slider.js'

const router = express.Router()

router.post('/', authAdmin, createSlider)
router.get('/', getSliders)


export default router