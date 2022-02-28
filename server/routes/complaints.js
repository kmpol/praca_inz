import express from 'express'

import { createComplaint } from '../controllers/complaints.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/:id', auth, createComplaint)
// router.get('/', auth, getReturns)
// router.get('/admin', authAdmin, getReturnsAdmin)
// router.put('/:id/updateStatus', authAdmin, updateStatus)

export default router