const { body } = require('express-validator')
const path = require('path')

//VALIDACIONES

//VER DONDE VA

const validateUser = [
    
    body('email')
    .isEmail().withMessage('Debes completar tu email'),
    body('password')
    .notEmpty().withMessage('Debes completar tu contraseña'),
     
    
];
module.exports = validateUser