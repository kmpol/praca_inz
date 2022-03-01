import express from 'express'

import { createComplaint, getComplaints, getComplaintsAdmin } from '../controllers/complaints.js'
import { auth } from '../middleware/auth.js'
import { authAdmin } from '../middleware/authAdmin.js'

const router = express.Router()

router.post('/:id', auth, createComplaint)
router.get('/', auth, getComplaints)
router.get('/admin', authAdmin, getComplaintsAdmin)
// router.put('/:id/updateStatus', authAdmin, updateStatus)

export default router