const connectToMongo=require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors());
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook app is listening at http://localhost:${port}`)
})