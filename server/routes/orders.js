import express from 'express'

import { createOrder, getOrders, getOrdersClient, updateOrderStatus } from '../controllers/orders.js'
import { authAdmin } from '../middleware/authAdmin.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/', createOrder)
router.get('/', authAdmin, getOrders)
router.get('/client', auth, getOrdersClient)
router.put('/:id', authAdmin, updateOrderStatus)

export default router