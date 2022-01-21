const mongoose= require('mongoose');
const mongUrl="mongodb://groca:11IM4PZs9LOU7hvTUB2l3vyGrDA8v3U9qGFm435XBu7SqYynW9qVZoqtX3P30l9iKKdEFaEIrVml2GcUddywGg==@groca.mongo.cosmos.azure.com:10255/Groca?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@groca@";

const connectToMongo=()=>{
    mongoose.connect(mongUrl, ()=>{
        console.log("Connected to MongoDB successfully");
    })
}
module.exports=connectToMongo;