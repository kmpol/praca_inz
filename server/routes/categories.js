import express from 'express'

import { createCategory, getCategories } from '../controllers/categories.js'
import { authAdmin } from '../middleware/authAdmin.js'

const router = express.Router()

router.post('/', authAdmin, createCategory)
router.get('/', getCategories)

export default router