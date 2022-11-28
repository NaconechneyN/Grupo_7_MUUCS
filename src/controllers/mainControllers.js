const path = require('path');
const db = require("../database/models")



const controllers = {
    index: (req, res) => {
        
        res.render('index', {titulo: 'Home'})
    }    
   
}

module.exports = controllers;