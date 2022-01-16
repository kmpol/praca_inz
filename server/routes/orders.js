import express from 'express'

import { createOrder, getOrders, getOrdersClient, updateOrderStatus, getOrder, getClientsTotal, getSingleClientOrdersTotal, getSalesLast7Days, getSalesLast30Days, getOrders7Days, getOrders30Days } from '../controllers/orders.js'
import { authAdmin } from '../middleware/authAdmin.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/', createOrder)
router.get('/clientstotal', authAdmin, getClientsTotal)
router.get('/client/:id/orderstotal', authAdmin, getSingleClientOrdersTotal)
router.get('/', authAdmin, getOrders)
router.get('/client', auth, getOrdersClient)
router.get('/:id', authAdmin, getOrder)
router.put('/:id', authAdmin, updateOrderStatus)
router.get('/stats/last7days', authAdmin, getSalesLast7Days)
router.get('/stats/last30days', authAdmin, getSalesLast30Days)
router.get('/stats/lastorders7days', authAdmin, getOrders7Days)
router.get('/stats/lastorders30days', authAdmin, getOrders30Days)

export default router