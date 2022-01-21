const mongoose = require('mongoose');
const { Schema } = mongoose;
const AddressSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    locality:{
        type:String,
        required:true,
    },
    Address_and_Street:{
        type:String,
        required:true,
    },
    City_or_Village:{
        type:String,
        required:true,
    },
    State:{
        type:String,
        required:true,
    },
    Country:{
        type:String,
        default:"India",
    },
    landmark:{
        type:String,
    },
    Alternate_Phone:{
        type:Number,
    },
    Address_Type:{
        type:String,
        required:true,
    },
});



const address= mongoose.model('address',AddressSchema);
module.exports=address;