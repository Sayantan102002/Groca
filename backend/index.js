const connectToMongo=require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors());
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/products', require('./routes/products'))
app.use('/api/Cart', require('./routes/Cart'))
app.use('/api/Address', require('./routes/Address'))
app.listen(port, () => {
  console.log(`Groca app is listening at http://localhost:${port}`)
})