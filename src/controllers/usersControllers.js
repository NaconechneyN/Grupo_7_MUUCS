const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const users = require("../models/User")


const controllers = {
   
    login: (req, res) => res.render('login',{titulo: 'Login'}),
    register: (req, res) => res.render('register',{titulo: 'Register'}),
    updateUser: (req, res) =>{
        // GUARDAMOS ERRORES
        let errors = validationResult(req);

        // ERROR SI EXISTE OTRO USUARIO CON EL MISMO EMAIL

        
        if(req.body.email != ''){
            let userInDb = users.findByField("email",req.body.email)
            if (userInDb){
                let error = {
                    value: '',
                    msg: 'ya existe un email con ese valor',
                    param: 'email',
                    location: 'body'
                  }
                
                errors.errors.push(error)
                return res.render('register', {errors: errors.mapped() , old: req.body})
            }
        }

        console.log(req.body)

        // SI NO HAY ERRORES, SE PROCEDE A CREAR EL USUARIO

        if (errors.isEmpty()){
            let newUser = {
                nombreyapellido : req.body.nombre,
                date : req.body.date,
                email : req.body.email,
                password: bcryptjs.hashSync(req.body.password,10),
                imagen : req.file.filename
                }
                users.create(newUser)


                res.redirect('/');
                
        }
        else{
            res.render('register', {errors: errors.mapped(), old: req.body},)
        }

    },
    processLogin: (req, res) =>{
        // GUARDAMOS ERRORES
        let errors = validationResult(req);

        if (errors.isEmpty()){
            
            let userInDb = users.findByField("email",req.body.email)

            if (userInDb){
                if(bcryptjs.compareSync(req.body.password, userInDb.password)){
                    delete userInDb.password;
                    req.session.usuarioLogueado = userInDb;
                    res.cookie('userEmail','hola',{maxAge: 1000*60})
                    console.log(res.cookie)
                    res.redirect('/users/perfil')

                }
                else{
                    let error = {
                        value: '',
                        msg: 'Contraseña invalida',
                        param: 'password',
                        location: 'body'
                      }
                      errors.errors.push(error)
                }
            }
            else{
                let error = {
                    value: '',
                    msg: 'Email invalido',
                    param: 'email',
                    location: 'body'
                 }
                
                errors.errors.push(error)
            }    
        }
        else{
            res.render('login', {errors: errors.mapped(), old: req.body},)
        }

    },
    perfil: (req, res) =>{
        res.render('profile', {user : req.session.usuarioLogueado, titulo: 'muucs'},)
    },

    outperfil: (req, res) =>{
        delete req.session.usuarioLogueado
        res.redirect('/')
    }
}


module.exports = controllers;