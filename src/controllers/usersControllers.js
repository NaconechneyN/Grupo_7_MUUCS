const path = require('path');

const controllers = {
   
    login: (req, res) => res.render('login',{title: 'Login'}),
    register: (req, res) => res.render('register',{title: 'Register'}),

}

module.exports = controllers;