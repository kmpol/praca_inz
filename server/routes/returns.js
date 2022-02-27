import express from 'express'

import { createReturn, getReturns, getReturnsAdmin, updateStatus } from '../controllers/returns.js'
import { auth } from '../middleware/auth.js'
import { authAdmin } from '../middleware/authAdmin.js'

const router = express.Router()

router.post('/:id', auth, createReturn)
router.get('/', auth, getReturns)
router.get('/admin', authAdmin, getReturnsAdmin)
router.put('/:id/updateStatus', authAdmin, updateStatus)

export default router