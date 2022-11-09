const users = require("../models/User")

function guest (req, res, next){
    
    res.locals.IsLogged = false;

    let emailCokie = req.cookies.userEmail

    let userCokie = users.findByField('email', emailCokie)

    if(userCokie){
        
        req.session.usuarioLogueado = userCokie;
        
    }

    if(req.session.usuarioLogueado){
        
        res.locals.IsLogged = true;
        res.locals.userLogged = req.session.usuarioLogueado ;
    }

    next();
 
}

module.exports = guest;