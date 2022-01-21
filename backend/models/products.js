const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductsSchema = new Schema({
    image:{
        type:String,
        required:true,
    },

    title:{
        type:String,
        required:true,
    },
    weights:{
        type:Array,
        required:true,
        default:["1kg"],
    },
    price:{
        type:Number,
        required:true,
    },
    sale:{
        type:Boolean,
        required:true,
        default:false,
    },
    saleDiscount:{
        type:String,
        required:true,
    }
});

const Products=mongoose.model('Products',ProductsSchema);
module.exports=Products;