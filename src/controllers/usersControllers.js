const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const usuario = fs.readFileSync('./data/user.json', 'utf-8');
const users = JSON.parse(usuario);
const myDataBaseInPath = path.join(__dirname, './data/user.json');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');


const controllers = {
   
    login: (req, res) => res.render('login',{title: 'Login'}),
    register: (req, res) => res.render('register',{title: 'Register'}),
    updateUser: (req, res) =>{
        // GUARDAMOS ERRORES
        let errors = validationResult(req);

        // ERROR SI EXISTE OTRO USUARIO CON EL MISMO EMAIL

        let userInDb = User.findByField('email', req.body.email)

        if (userInDb){
            return res.render('register', {errors: {email: { msg: 'Este email ya está registrado'}}, old: req.body})
        }

        // SI NO HAY ERRORES, SE PROCEDE A CREAR EL USUARIO

        if (errors.isEmpty()){
            let newUser = {
                id : users.length+1,
                nombre : req.body.nombre,
                // nombreUsuario : req.body.nombreUsuario,
                date : req.body.date,
                email : req.body.email,
                password: bcryptjs.hashSync(req.body.password, 12),
                // imagen : req.file.filename
                }
                console.log(newUser);
                
                users.push(newUser);
                // fs.writeFileSync(myDataBaseInPath, JSON.stringify(users, null, ' '))
                // res.redirect('/');
        }
        else{
            res.render('register', {errors: errors.mapped(), old: req.body},)
        }

    }    
}


module.exports = controllers;