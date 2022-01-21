const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    image: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    weights: {
        type: Array,
        required: true,
        default: ["1kg"],
    },
    price: {
        type: Number,
        required: true,
    },
    sale: {
        type: Boolean,
        required: true,
        default: false,
    },
    saleDiscount: {
        type: String,
        required: true,
    },
    Number_Of_items: {
        type: Number,
        reauired: true,
    },
});
const CartData = mongoose.model('cart', CartSchema);
module.exports = CartData;