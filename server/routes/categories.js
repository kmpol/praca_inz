import express from 'express'

import { createCategory } from '../controllers/categories.js'
import { authAdmin } from '../middleware/authAdmin.js'

const router = express.Router()

router.post('/', authAdmin, createCategory)

export default router