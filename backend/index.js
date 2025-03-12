const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/api/data', (req,res) => {
  res.json({
    data: "Hello"
  })
})

app.listen(5001, ()=>console.log("Server is running"))