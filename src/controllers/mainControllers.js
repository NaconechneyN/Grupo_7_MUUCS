const path = require('path');

const controllers = {
    index: (req, res) => res.render('index'),
    login: (req, res) => res.render('login'),
    productCart: (req, res) => res.render('productCart'),
    productDetail: (req, res) => res.render('productDetail'),
    register: (req, res) => res.render('register'),
}

module.exports = controllers;