const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

app.use(cors({
    origin:'http://localhost:3000',
    methods:['PUT','GET','POST','DELETE']
}))

app.use(express.json())

const FoodModel=require("./models/Food")
mongoose.connect("mongodb+srv://admin:admin@cluster0.wqxwhyo.mongodb.net/food")
.then(()=>console.log('Connected'))
.catch(err=>console.log(err))

app.listen(3001,()=>{
    console.log("Server is Running...")
})