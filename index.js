require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000 || process.env.port

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("abhihaitabhihai");
})

app.get('/login',(req,res)=>{
  res.send('<h1>this is h1 tag</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})