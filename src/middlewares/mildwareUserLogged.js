const users = require("../models/User")

function guest (req, res, next){
    res.locals.IsLogged = false;

    let emailCokie = req.cookies.userEmail

    let userCokie = users.findByField('email', emailCokie)

    if(userCokie){
        req.session.userLogged = userCokie;
    }

    if(req.session.userLogged){
        res.locals.IsLogged = true;
        res.locals.userLogged = req.session.userLogged ;
    }
 
}

module.exports = guest;