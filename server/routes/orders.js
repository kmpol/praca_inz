import express from 'express'

import { createOrder, getOrders, getOrdersClient } from '../controllers/orders.js'
import { authAdmin } from '../middleware/authAdmin.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/', createOrder)
router.get('/', authAdmin, getOrders)
router.get('/client', auth, getOrdersClient)

export default router