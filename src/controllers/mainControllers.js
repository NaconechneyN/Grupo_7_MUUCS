const path = require('path');
const db = require("../database/models")



const controllers = {
    index: (req, res) => {


       

      db.Usuario.findAll({
        raw: true
      })
      .then((users) => {		
        console.log(users)
      })


        if(req.session.usuarioLogueado){
            usuario = req.session.usuarioLogueado
        }else{
            usuario = null
        }
        res.render('index', {titulo: 'Home', usuario : usuario})
    }    
   
}

module.exports = controllers;