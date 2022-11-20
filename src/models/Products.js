const fs = require("fs")
const path = require('path')
const  {  v4 : uuidv4  }  =  require ( 'uuid' )

const Product = {
    fileName: "../../data/coursesDataBase.json",

    getData: function(){
        return JSON.parse(fs.readFileSync(path.join(__dirname, this.fileName), 'utf-8'))
        
    },

    findAll: function () {
        return this.getData();
    },

    findByPk:  function (id) {
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
    filterByField: function (field, text) {
        let allProducts = this.findAll();
        // se itera por cada producto buscando el que tenga el mismo id
        let productFound = allProducts.filter(oneProduct => oneProduct[field] === text);
        return productFound;
    },

    create: function (productData) {
        let allProducts = this.findAll();
        let newProduct = {
            id: uuidv4 ( ),
            ...productData
        }
        allProducts.push(newProduct);
        fs.writeFileSync(path.join(__dirname, this.fileName), JSON.stringify(allProducts, null, ' '));
        return true;

    },

    delete: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(path.join(__dirname, this.fileName), JSON.stringify(finalProducts, null, ' '));
        return true;


    },

    edit: function (curso) {
        let allProducts = this.findAll()
        allProducts.forEach(cursoEdit => {
            if (cursoEdit.id == curso.id) {

                cursoEdit.titulo = curso.titulo,
                cursoEdit.descripcion = curso.descripcion,
                cursoEdit.descripcionQueAprenderas = curso.descripcionQueAprenderas,
                cursoEdit.tipoDeEnsenianza = curso.tipoDeEnsenianza,
                cursoEdit.certifiacion = curso.certifiacion,
                cursoEdit.QuienLoImparte = curso.QuienLoImparte,
                cursoEdit.precio =curso.precio,
                cursoEdit.duracion = curso.duracion,
                cursoEdit.actualizacion = curso.actualizacion
                

            }
        })
        fs.writeFileSync(path.join(__dirname, this.fileName), JSON.stringify(allProducts, null, ' '));
        return true;
    }
  
}
console.log(Product.findByPk(1))



module.exports = Product;