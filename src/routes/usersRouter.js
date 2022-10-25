const express= require('express');
const router= express.Router();
const controllers = require('../controllers/usersControllers');
const { body } = require('express-validator')


//VALIDACIONES

//VER DONDE VA



const validateUser = require('../middlewares/mildwareUserForm');
const validateLogin = require('../middlewares/mildwareUserLogin');


// REQUIERO VISTA LOGIN

router.get('/login', controllers.login);

// POSTEO VISTA DE LOGIN

// router.post('/login', controllers.loggedUser);

// REQUIERO VISTA REGISTER

router.get('/register', controllers.register);

// POSTEO REGISTER 

router.post('/register', validateUser, controllers.updateUser);

router.post('/login', validateLogin, controllers.processLogin);








module.exports = router;