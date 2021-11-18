import express from 'express'

import {
    createUser,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    getUsers,
    getUserAdmin
} from '../controllers/users.js'
import { auth } from '../middleware/auth.js'
import { authAdmin } from '../middleware/authAdmin.js'

const router = express.Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.post('/logout', auth, logoutUser)
router.post('/forgotpassword', forgotPassword)
router.put('/resetpassword/:resetToken', resetPassword)
router.get('/', authAdmin, getUsers)
router.get('/:id', authAdmin, getUserAdmin)

export default router