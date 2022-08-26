const express= require('express');
const app = express();

const path = require('path');

const dotenv= require('dotenv').config();

const mainRouter = require ('./src/routes/mainRouter')

app.use(express.static('public'));

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, "./src/views"))



app.listen(process.env.PORT, ()=>{
    console.log("Servidor MUUCS acitvo bebé!")
});

app.use(mainRouter);