const path = require('path');



const controllers = {
    index: (req, res) => {
        if(req.session.usuarioLogueado){
            usuario = req.session.usuarioLogueado
        }else{
            usuario = null
        }
        res.render('index', {titulo: 'Home', usuario : usuario})
    }    
   
}

module.exports = controllers;