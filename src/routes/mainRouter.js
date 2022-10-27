// Requerimos express porque lo vamos a utiliza
const express= require('express');
// Utilizamos la siguiente funcion para crear un objeto de enrutador y manejar solicitudes
const router= express.Router();
// Requerimos los controladores
const controllers = require('../controllers/mainControllers');

// Definimos ruta raíz
router.get('/', controllers.index);




//Exportamos la constante router y su contenido 
module.exports = router;