import mongoose from 'mongoose'
import validator from 'validator'

const shopConfigSchema = new mongoose.Schema({
    contact_email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("This is not an email!")
            }
        }
    },
    contact_phone_number: String,
    shop_address: {
        name: String,
        line1: String,
        line2: String,
        zip: String,
        city: String,
        country: String
    },
    return_address: {
        name: String,
        line1: String,
        line2: String,
        zip: String,
        city: String,
        country: String
    },
}, {
    timestamps: true
})

shopConfigSchema.statics.isConfigExists = async function () {
    const config = await ShopConfig.findOne({})
    if (!config) {
        return
    } else {
        throw Error("Config already exists!")
    }
}

const ShopConfig = mongoose.model('ShopConfig', shopConfigSchema)

export default ShopConfig