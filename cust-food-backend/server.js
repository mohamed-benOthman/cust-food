const express = require ('express');
const bodyParser =require ('body-parser');
const userRoute= require('./routes/user');
const recipeRoute= require('./routes/recipe');
const mongoose=require('mongoose');
const path = require('path');

const app=express();
require('dotenv').config()
var cors = require('cors');
app.use(cors())


const uri = "mongodb+srv://mohamed:0000@cluster0-s8aoi.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true}  ,()=>console.log('connected'))

app.use(bodyParser.json()); // application/json
app.use('/api/recipe', recipeRoute )
app.use('/api/user', userRoute);
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(8080)
