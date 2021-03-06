import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'
import { auth } from '../middleware/auth.js'

import { createShopConfig, getShopConfig, updateShopConfig } from '../controllers/shopConfigs.js'

const router = express.Router()

// /api/shopConfig/
router.post('/', authAdmin, createShopConfig)
router.get('/', auth, getShopConfig)
router.put('/', authAdmin, updateShopConfig)

export default router