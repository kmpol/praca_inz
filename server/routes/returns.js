import express from 'express'

import { createReturn, getReturns } from '../controllers/returns.js'
import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/:id', auth, createReturn)
router.get('/', auth, getReturns)

export default router