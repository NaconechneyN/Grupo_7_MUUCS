const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require("../database/models")
const { v4: uuidv4 } = require('uuid')


const controllers = {

    login: (req, res) => res.render('login', { titulo: 'Login' }),
    register: (req, res) => res.render('register', { titulo: 'Register' }),
    updateUser: (req, res) => {
        // GUARDAMOS ERRORES
        let errors = validationResult(req);

        
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.mapped(), old: req.body, titulo: "Register" },)
        }


        if (req.body.email != '') {
            console.log(req.body.email)
            db.Usuario.findAll({
                raw: true,
                where: {
                    email: req.body.email

                }
            })
                .then((usuario) => {
                    console.log(usuario)
                    if (usuario.length === 1) {
                        let error = {
                            value: '',
                            msg: 'ya existe un email con ese valor',
                            param: 'email',
                            location: 'body'
                        }
                        
                        errors.errors.push(error)
                        return res.render('register', { errors: errors.mapped(), old: req.body, titulo: "Register" })
                    }
                    else {



                        let rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
                        console.log(!rePassword.test(req.body.password))

                        if (!rePassword.test(req.body.password)) {
                            let error = {
                                value: '',
                                msg: 'No se ingresó una contraseña valida!. Debe tener al menos 8 caracteres, letras mayúsculas, minúsculas, un número y un carácter especial.',
                                param: 'password',
                                location: 'body'
                            }

                            errors.errors.push(error)
                            return res.render('register', { errors: errors.mapped(), old: req.body, titulo: "Register" })
                        }
                        else {

                            // SI NO HAY ERRORES, SE PROCEDE A CREAR EL USUARIO
                            db.Usuario.create({
                                idUsuarios: uuidv4(),
                                nombreYApellido: req.body.nombre,
                                fechaDeNacimiento: req.body.date,
                                password: bcryptjs.hashSync(req.body.password, 10),
                                email: req.body.email,
                                imagen: req.file.filename
                            })
                            res.redirect('/');
                        }

                    }
                })

        }







    },
    processLogin: (req, res) => {
        // GUARDAMOS ERRORES
        let errors = validationResult(req);

        
        if (errors.isEmpty()) {

            db.Usuario.findAll({
                raw: true,
                where: {
                    email: req.body.email

                }
            })
                .then((usuarios) => {
                    console.log(usuarios.length)
                    if (usuarios.length === 1) {
                        const [usuario] = usuarios
                        if (bcryptjs.compareSync(req.body.password, usuario.password)) {
                            delete usuario.password;
                            req.session.usuarioLogueado = usuario;
                            console.log(req.body)
                            if (req.body.recordar) {
                                res.cookie('userEmail', req.session.usuarioLogueado.email, { maxAge: 1000 * 60 * 15 })
                            }

                            res.redirect('/users/perfil')

                        }
                        else {
                            let error = {
                                value: '',
                                msg: 'Contraseña invalida',
                                param: 'password',
                                location: 'body'
                            }
                            errors.errors.push(error)
                            res.render('login', { errors: errors.mapped(), old: req.body, titulo: "login" },)
                        }
                    }
                    else {
                        let error = {
                            value: '',
                            msg: 'Email invalido',
                            param: 'email',
                            location: 'body'
                        }

                        errors.errors.push(error)
                        res.render('login', { errors: errors.mapped(), old: req.body, titulo: "login" },)
                    }


                })

                .catch(error => {
                    console.error('función enRechazo invocada: ', error)
                    res.render('login', { errors: errors.mapped(), old: req.body, titulo: "login" },)
                })




        }
        else {
            res.render('login', { errors: errors.mapped(), old: req.body, titulo: "login" },)
        }

    },
    perfil: (req, res) => {

        res.render('profile', { user: req.session.usuarioLogueado, titulo: 'muucs' },)
    },

    outperfil: (req, res) => {
        delete req.session.usuarioLogueado
        res.redirect('/')
    },

    editar: (req, res) => {
        console.log(req.session.usuarioLogueado)
        res.render('editar', { titulo: 'Editar', })
    },

    editar1: (req, res) => {
        let errors = null; //validationResult(req)

        /*if (errors.isEmpty()) {
            return res.render('editar', { errors: errors.mapped(), old: req.body, titulo: "Editar" },)
        }*/

        console.log(req.body)

        if (req.body.password === '') {
            db.Usuario.update({
                nombreYApellido: req.body.nombre,
                fechaDeNacimiento: req.body.date,
                email: req.body.email,
                imagen: req.file.filename,
                domicilio: req.body.domicilio,
                descripcion: req.file.descripcion
            },
                {
                    where: {
                        idUsuarios: req.session.usuarioLogueado.idUsuarios

                    }
                })
            res.redirect('/users/perfil')
        }
        else {
            db.Usuario.update({
                nombreYApellido: req.body.nombre,
                fechaDeNacimiento: req.body.date,
                password: bcryptjs.hashSync(req.body.password, 10),
                email: req.body.email,
                imagen: req.file.filename,
                domicilio: req.body.domicilio,
                descripcion: req.file.descripcion
            },
                {
                    where: {
                        idUsuarios: req.params.id

                    }
                })
            res.redirect('/users/profile')
        }



    }
}


module.exports = controllers;