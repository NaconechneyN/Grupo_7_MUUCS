const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const getUsers = require("../utils/getUsers")
const setUsers = require("../utils/setUsers")


const controllers = {
   
    login: (req, res) => res.render('login',{title: 'Login'}),
    register: (req, res) => res.render('register',{title: 'Register'}),
    updateUser: (req, res) =>{
        // GUARDAMOS ERRORES
        let errors = validationResult(req);

        // ERROR SI EXISTE OTRO USUARIO CON EL MISMO EMAIL

        let users = getUsers()


        if(req.body.email != ''){
            let userInDb = users.some(elem => elem.Email === req.body.email)
            
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
                id : users.length+1,
                nombreyapellido : req.body.nombre,
                date : req.body.date,
                email : req.body.email,
                password: req.body.password,
                }
                console.log(newUser);
                
                users.push(newUser);

                setUsers(JSON.stringify(users));


                res.redirect('/');
                
        }
        else{
            res.render('register', {errors: errors.mapped(), old: req.body},)
        }

    }    
}


module.exports = controllers;