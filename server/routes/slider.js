import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'

import { createSlider } from '../controllers/slider.js'

const router = express.Router()

router.post('/', authAdmin, createSlider)


export default router