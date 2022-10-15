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
    body('certificacion')
    .notEmpty().withMessage('Debes completar elegir una opcion'),
    body('precio')
    .notEmpty().withMessage('Debes completar el campo es obligatorio'),
    body('duracion')
    .notEmpty().withMessage('Debes completar el campo es obligatorio'),
    body('imagen').custom((value, { req }) => {
        let file = req.file
        let extenciones = [".jpg", ".png", ".gif"]
        let extencion = path.extname(file.originalname)
        if (!file) {
          throw new Error('No has subiedo una imagen');
        }
        if (!extenciones.includes(extencion)) {
            throw new Error('La imagen que has subido no corresponde con ninguna extencion admitida (.jpg, .png, .gif)');
          }
        return true;
    }),    
    
];
module.exports = validateUser