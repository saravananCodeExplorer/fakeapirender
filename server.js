const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("from backend and fetch api data")
})

app.get("/items",async(req,res)=>{
    try{
 
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.json(response.data)
    }
    catch(err){
        console.log(err)
    }
})


const port = 5000
app.listen(port,()=>{
    console.log("The server listening port is",port)
})