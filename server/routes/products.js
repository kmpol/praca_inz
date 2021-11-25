import express from 'express'
import multer from 'multer'

import { getProducts, getProduct, createProduct, setProductPicture, disableOrEnableProductSale } from '../controllers/products.js'

const router = express.Router()

const picture = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image!'))
        }
        cb(undefined, true)
    }
})

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.patch('/:id', disableOrEnableProductSale)

export default router