const express = require('express')
const app = express();

const port = 5000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/',(req,res)=>{
    res.send('This is a post Request')
})

app.put('/',(req,res)=>{
    res.send('This is a Put Request')
})

app.delete('/',(req,res)=>{
    res.send('This is a Delete Request')
})


app.listen(port,()=>{
    console.log('listeting at port :',port)
})