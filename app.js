// Requerimos express y lo asignamos a la constante app express la cual va a levantar el servidor
const express= require('express');
const app = express();
const db = require("./database/models/index")

// Requerimos cookie para poder guardar informacion del lado del usuario
const cookie = require('cookie-parser')

// Requerimos mildware para saber si hay un usuario recordado
const userLogged = require('./src/middlewares/mildwareUserLogged')

// Requerimos path para poder manejar rutas relativas y absolutas
const path = require('path');

// Requerimos path para poder manejar rnuestras variables de entorno
const dotenv= require('dotenv').config();

// Requerimos methodOverride para poder usar tambien los protocolos put, patch y delete
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// Requerimos express-session almacena los datos de sesión en el servidor; sólo guarda el ID de sesión en la propia cookie, no los datos de sesión
const session = require('express-session')

// Requerimos las rutas 
const mainRouter = require ('./src/routes/mainRouter')
const productsRouter = require('./src/routes/productsRouter')
const usersRouter = require('./src/routes/usersRouter')

// Usamos session
app.use(session({secret: "Muucs" }));

// Usamos cookie
app.use(cookie());

// Usamos mildware para saber si hay un usuario recordado
app.use(userLogged);

// Usamos la funcion de static de express para indicarle a express cual e sla carpeta que tiene los activos staticos
app.use(express.static(path.join(__dirname, 'public')));


// Usamos las funciones urlencode y json para poder recibir en formato json el objeto o formulario mandado por post o put
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Leer req.body

// Fijamos como nuevo motor de visualizacion a ejs
app.set('view engine', 'ejs')

// Fijamos las carpetas donde se encuentran nuestras vistas
app.set('views',[ path.join(__dirname, "./src/views"),
path.join(__dirname, "./src/views/products"),
path.join(__dirname, "./src/views/users")
]);


// Configuramos las conexiones en el host y puerto especificados con ayuda de dotenv
app.listen(process.env.PORT, ()=>{
    console.log("Servidor MUUCS levantado!")

   db.sequelize.sync({
    force: false
   })
});


//Usamos las rutas requeridas anteriormente 
app.use(mainRouter);

app.use("/products", productsRouter);

app.use("/users", usersRouter);

if (true) {
    const scriptDb = require("./src/scripts/jsonAsql")
    scriptDb();
} 


