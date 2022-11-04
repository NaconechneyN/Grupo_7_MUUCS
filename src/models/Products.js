const fs = require("fs")
const path = require('path')

const Product = {
    fileName: './data/coursesDataBase.json',

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    generateId: function() {
        let allProducts = this.findAll();
        let lastProducts = allProducts.pop();
        if (lastProducts){
            return lastProducts.id + 1;
        }

        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allProducts = this.findAll();
        // se itera por cada producto buscando el que tenga el mismo id
        let productFound = allProducts.find(oneProduct => oneProduct.id === id);
        return productFound;
    },

    findByField: function (field, text) {
        let allProducts = this.findAll();
        // se itera por cada producto buscando el que tenga el mismo id
        let productFound = allProducts.find(oneProduct => oneProduct[field] === text);
        return productFound;
    },

    create: function (productData) {
        let allProducts = this.findAll();
        let newProduct = {
            id: this.generateId(),
            ...productData
        }
        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, ' '));
        return true;

    },

    delete: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        return true;


    }
}

module.exports = Product;