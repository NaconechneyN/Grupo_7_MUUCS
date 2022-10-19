const { body } = require('express-validator')
const path = require('path')

//VALIDACIONES

//VER DONDE VA

const validateUser = [
    body('nombre')
    .notEmpty().withMessage('Debes completar tu nombre y apellido'),
    body('date')
    .isDate().withMessage('Debes colocar tu fecha de nacimiento'),
    body('email')
    .isEmail().withMessage('Debes completar tu email'),
    body('password')
    .notEmpty().withMessage('Debes completar tu contraseña'),
    body('password2')
    .notEmpty().withMessage('Las contraseñas no coinciden'),
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