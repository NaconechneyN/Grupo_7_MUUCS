const path = require('path');



const controllers = {
    index: (req, res) => res.render('index', {titulo: 'Home'}),
   /* login: (req, res) => res.render('login',{title: 'Login'}),
    productCart: (req, res) => res.render('productCart',{title: 'ProductCart'}),
    productDetail: (req, res) => res.render('productDetail',{title: 'ProductDetail'}),
    register: (req, res) => res.render('register',{title: 'Register'}),
    productEdi: (req, res) => res.render ('productsEdi',{title: 'productsEdi'}),
    productList: (req, res) => res.render ('productList',{title: 'productsList', cursos:cursos}),
    productCarga: (req, res) => res.render ('productsCarga',{title: 'productsCarga'}),*/
}

module.exports = controllers;