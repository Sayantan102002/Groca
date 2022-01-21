const mongoose = require('mongoose');
const { Schema } = mongoose;

  const UserSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    Date_Of_Birth:{
        type:Date,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const User=mongoose.model('user',UserSchema);
module.exports=User;