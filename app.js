const express= require('express');
const app = express();

const path = require('path');

const dotenv= require('dotenv').config();

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Routes
const mainRouter = require ('./src/routes/mainRouter')
const coursesRouter = require('./src/routes/coursesRouter')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); // Leer req.body

app.set('view engine', 'ejs')

app.set('views',[ path.join(__dirname, "./src/views"),
path.join(__dirname, "./src/views/courses"),
path.join(__dirname, "./src/views/users")
]);



app.listen(process.env.PORT, ()=>{
    console.log("Servidor MUUCS acitvo bebé!")
});

app.use(mainRouter);

app.use("/courses", coursesRouter)