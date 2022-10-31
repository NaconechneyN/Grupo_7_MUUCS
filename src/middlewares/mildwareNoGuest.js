function guest (req, res, next){
    if(req.session.usuarioLogueado){
        next();
    }
    res.redirect('/')
}

module.exports = guest;