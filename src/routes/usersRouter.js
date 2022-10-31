const express= require('express');
const router= express.Router();
const controllers = require('../controllers/usersControllers');
const { body } = require('express-validator')


//VALIDACIONES

//VER DONDE VA


// REQUIERO MILDWARE DE VALIDACIONES PARA EL REGISTRO Y EL LOGIN
const validateUser = require('../middlewares/mildwareUserForm');
const validateLogin = require('../middlewares/mildwareUserLogin');

// requerimos el multer de la carpeta mildware
const upload = require('../middlewares/mildwareMulterUser')

// REQUIERO VISTA LOGIN

router.get('/login', controllers.login);

// POSTEO VISTA DE LOGIN

// router.post('/login', controllers.loggedUser);

// REQUIERO VISTA REGISTER

router.get('/register', controllers.register);

// POSTEO REGISTER 

router.post('/register', [upload.single("imagen"), validateUser], controllers.updateUser);

router.post('/login', validateLogin, controllers.processLogin);








module.exports = router;