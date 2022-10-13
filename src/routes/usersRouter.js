const express= require('express');
const router= express.Router();
const controllers = require('../controllers/usersControllers');
const { body } = require('express-validator')


//VALIDACIONES

//VER DONDE VA

const validateUser = [
    body('nombre')
    .notEmpty().withMessage('Debes completar tu nombre y apellido'),
    body('nombreUsuario')
    .notEmpty().withMessage('Debes colocar tu nombre de usuario'),
    body('date')
    .isDate().withMessage('Debes colocar tu fecha de nacimiento'),
    body('email')
    .isEmail().withMessage('Debes completar tu email'),
    body('password')
    .notEmpty().withMessage('Debes completar tu contraseña'),
    body('password2')
    .notEmpty().withMessage('Las contraseñas no coinciden'),
    
];

// REQUIERO VISTA LOGIN

router.get('/login', controllers.login);

// POSTEO VISTA DE LOGIN

// router.post('/login', controllers.loggedUser);

// REQUIERO VISTA REGISTER

router.get('/register', controllers.register);

// POSTEO REGISTER 

router.post('/register', validateUser, controllers.updateUser);








module.exports = router;