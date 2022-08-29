const path = require('path');

const cursos = require('./cursos');

const controllers = {
    index: (req, res) => res.render('index', {title: 'Home'}),
    login: (req, res) => res.render('login',{title: 'Login'}),
    productCart: (req, res) => res.render('productCart',{title: 'ProductCart'}),
    productDetail: (req, res) => res.render('productDetail',{title: 'ProductDetail', cursos:cursos}),
    register: (req, res) => res.render('register',{title: 'Register'}),
}

module.exports = controllers;