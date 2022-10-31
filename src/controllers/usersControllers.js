const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const getUsers = require("../utils/getUsers")
const setUsers = require("../utils/setUsers")
const  {  v4 : uuidv4  }  =  require ( 'uuid' ) ; 


const controllers = {
   
    login: (req, res) => res.render('login',{title: 'Login'}),
    register: (req, res) => res.render('register',{title: 'Register'}),
    updateUser: (req, res) =>{
        // GUARDAMOS ERRORES
        let errors = validationResult(req);

        // ERROR SI EXISTE OTRO USUARIO CON EL MISMO EMAIL

        let users = getUsers()

        console.log(req.body.email)
        if(req.body.email != ''){
            let userInDb = users.some(elem => elem.email === req.body.email)
            console.log(userInDb)
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


        

        // SI NO HAY ERRORES, SE PROCEDE A CREAR EL USUARIO

        console.log(errors)
        if (errors.isEmpty()){
            let newUser = {
                id : uuidv4 ( ),
                nombreyapellido : req.body.nombre,
                date : req.body.date,
                email : req.body.email,
                password: bcryptjs.hashSync(req.body.password,10),
                imagen : req.file.filename
                }
                console.log(newUser);
                
                users.push(newUser);

                setUsers(JSON.stringify(users));


                res.redirect('/');
                
        }
        else{
            res.render('register', {errors: errors.mapped(), old: req.body},)
        }

    },
    processLogin: (req, res) =>{
        // GUARDAMOS ERRORES
        let errors = validationResult(req);



        let users = getUsers()


        if (errors.isEmpty()){
            
            let userInDb = users.filter(elem => elem.email === req.body.email)
            userInDb = userInDb.pop()

            if (userInDb){
                if(bcryptjs.compareSync(req.body.password, userInDb.password)){
                    req.session.usuarioLogueado = userInDb;
                    console.log(req.session.usuarioLogueado)
                    res.redirect('/')

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

    }     
}


module.exports = controllers;