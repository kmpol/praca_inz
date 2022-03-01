import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'

import { createShopConfig, getShopConfig, updateShopConfig } from '../controllers/shopConfigs.js'

const router = express.Router()

// /api/shopConfig/
router.post('/', authAdmin, createShopConfig)
router.get('/', authAdmin, getShopConfig)
router.put('/', authAdmin, updateShopConfig)

export default router