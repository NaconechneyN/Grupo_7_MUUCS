const express= require('express');
const app = express();

const path = require('path');

const dotenv= require('dotenv').config();

const mainRouter = require ('./src/routes/mainRouter')

app.use(express.static('public'));



app.listen(process.env.PORT, ()=>{
    console.log("Servidor MUUCS acitvo bebé!")
});

app.use(mainRouter);