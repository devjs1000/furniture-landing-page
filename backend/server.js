import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotEnv from 'dotenv'
import user from './routes/users.js'
dotEnv.config()
const app=express()

const port=process.env.PORT || 3000
const uri=process.env.ATLAS_URI
console.log(uri);
console.log(port);

app.use(cors())
app.use(express.json())
mongoose.connect(uri, {useNewUrlParser:true})

const connection=mongoose.connection

connection.once('open', ()=>{
    console.log('mongo db is running');
})


app.get('/',(req, res)=>{
    res.send('<h1 style="display:flex;justify-content:center;align-items:center; height:90vh; font-size:6rem;"> hello <span style="color:lime"> express </span> </h1>')
})

app.use('/users', user)
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
