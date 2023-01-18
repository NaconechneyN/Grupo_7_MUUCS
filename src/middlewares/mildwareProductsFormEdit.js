const { body } = require('express-validator')
const path = require('path')

//VALIDACIONES

//VER DONDE VA

const validateUser = [
    body('titulo')
    .notEmpty().withMessage('Debes completar el campo es obligatorio')
    .isLength({ min: 5 }).withMessage('Debe Contener minimo 5 Caracteres'),
    body('descripcion')
    .notEmpty().withMessage('Debes completar el campo es obligatorio')
    .isLength({ min: 100, max:200 }).withMessage('Debe Contener minimo 100 y maximo 200 Caracteres'),
    body('tipoDeEnsenianza')
    .notEmpty().withMessage('Debes completar elegir una opcion'),
   /* body('certificacion')
    .notEmpty().withMessage('Debes completar elegir una opcion'),*/
    body('precio')
    .notEmpty().withMessage('Debes completar el campo es obligatorio'),
    body('duracion')
    .notEmpty().withMessage('Debes completar el campo es obligatorio'),
       
    
];
module.exports = validateUser