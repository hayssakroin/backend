const express = require("express")
const app = express()
const port = 3000

app.get('/ola', (req,res)=>{
    res.send("olá hayssa chuchuca")

})

app.listen(port,()=>{
    console.log("API rodando...")
})