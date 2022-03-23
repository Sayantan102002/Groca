const mongoose= require('mongoose');
const mongUrl="mongodb://localhost:27017/Groca?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo=()=>{
    mongoose.connect(mongUrl, ()=>{
        console.log("Connected to MongoDB successfully");
    })
}
module.exports=connectToMongo;