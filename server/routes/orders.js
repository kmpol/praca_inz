import express from 'express'

import { createOrder, getOrders, getOrdersClient, updateOrderStatus, getOrder } from '../controllers/orders.js'
import { authAdmin } from '../middleware/authAdmin.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/', createOrder)
router.get('/', authAdmin, getOrders)
router.get('/client', auth, getOrdersClient)
router.get('/:id', authAdmin, getOrder)
router.put('/:id', authAdmin, updateOrderStatus)

export default router