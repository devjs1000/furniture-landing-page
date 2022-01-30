import express from 'express'
import mongoose from 'mongoose'
const app=express()
const port=process.env.PORT || 8000

app.get('/',(req, res)=>{
    res.send('hello express hui hui')
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
