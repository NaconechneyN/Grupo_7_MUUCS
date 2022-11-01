const express= require('express');
const router= express.Router();
const controllers = require('../controllers/usersControllers');
const guest = require('../middlewares/mildwareGuest')

// Requerimos mildware para verificar que el usuario esta logueado
const noGuest = require('../middlewares/mildwareNoGuest.js')


//VALIDACIONES

//VER DONDE VA


// REQUIERO MILDWARE DE VALIDACIONES PARA EL REGISTRO Y EL LOGIN
const validateUser = require('../middlewares/mildwareUserForm');
const validateLogin = require('../middlewares/mildwareUserLogin');

// requerimos el multer de la carpeta mildware
const upload = require('../middlewares/mildwareMulterUser')

// REQUIERO VISTA LOGIN

router.get('/login',guest, controllers.login);

// POSTEO VISTA DE LOGIN

// router.post('/login', controllers.loggedUser);

// REQUIERO VISTA REGISTER

router.get('/register',guest, controllers.register);

// POSTEO REGISTER 

router.post('/register', [upload.single("imagen"), validateUser], controllers.updateUser);

router.post('/login', validateLogin, controllers.processLogin);

// REQUIERO VISTA Perfil

router.get('/perfil',noGuest, controllers.perfil);







module.exports = router;