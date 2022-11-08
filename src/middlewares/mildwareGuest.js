function guest (req, res, next){
    if(req.session.usuarioLogueado){
        res.redirect('/')
    }else{
        next();
    }
}

module.exports = guest;