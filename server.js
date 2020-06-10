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
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


app.listen(process.env.PORT || 8080);
app.use(bodyParser.json()); // application/json
app.use('/api/recipe', recipeRoute )
app.use('/api/user', userRoute);

app.listen(port)
