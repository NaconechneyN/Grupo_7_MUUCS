function guest (req, res, next){
    if(req.session.usuarioLogueado){
        next();
    }else{
        res.redirect('/')
    }
}

module.exports = guest;