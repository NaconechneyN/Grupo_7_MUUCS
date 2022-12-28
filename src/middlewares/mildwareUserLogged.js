const db = require("../database/models")

function guest(req, res, next) {

    res.locals.IsLogged = false;

    if(req.session.usuarioLogueado){
        res.locals.IsLogged = true;
        res.locals.userLogged = req.session.usuarioLogueado;
        return next();
    }
    else if (req.cookies.userEmail) {
        db.Usuario.findAll({
            raw: true,
            where: {
                email: req.cookies.userEmail

            }
        })
            .then((usuarios) => {
                const [usuario] = usuarios
                if (usuarios.length === 1) {

                    req.session.usuarioLogueado = usuario;

                }

                if (req.session.usuarioLogueado) {

                    res.locals.IsLogged = true;
                    res.locals.userLogged = req.session.usuarioLogueado;

                }

            })

    }



    next();

}

module.exports = guest;