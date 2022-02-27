import express from 'express'
import { authAdmin } from '../middleware/authAdmin.js'

import { getProducts, getProduct, createProduct, setProductPicture, disableOrEnableProductSale, updateProduct } from '../controllers/products.js'

const router = express.Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id', authAdmin, updateProduct)
router.patch('/:id', disableOrEnableProductSale)

export default router