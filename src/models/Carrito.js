const fs = require("fs")
const path = require('path')
const  {  v4 : uuidv4  }  =  require ( 'uuid' )

const Carrito = {
    fileName: "../data/carrito.json",

    getData: function(){
        return JSON.parse(path.join(__dirname, this.fileName), 'utf-8')
        
    },

    findByPk: function (id) {
        let allCarrito = this.getData();
        // se itera por cada producto buscando el que tenga el mismo id
        let carritoFound = allCarrito.find(oneCarrito => oneCarrito.id === id);
        return carritoFound;
    },

    create: function () {
        let allCarrito = this.getData();
        let newCarrito = {
            id: uuidv4 ( ),
            producto : []
        }
        allCarrito.push(newCarrito);
        fs.writeFileSync(path.join(__dirname, this.fileName), JSON.stringify(allCarrito, null, ' '));
        return true;

    },

    delete: function (id) {
        let allCarrito = this.findAll();
        let finalCarrito = allCarrito.filter(oneCarrito => oneCarrito.id !== id);
        fs.writeFileSync(path.join(__dirname, this.fileName), JSON.stringify(finalCarrito, null, ' '));
        return true;


    },

    addProduct: function (id, product) {
        let allCarrito = this.getData()
        allCarrito.forEach(carrito => {
            if(carrito.id === id){
                carrito.producto.push(product);
            }
        });

        fs.writeFileSync(path.join(__dirname, this.fileName), JSON.stringify(allCarrito, null, ' '));
        return true;
    },

    removeProduct: function (idProducto, idCarrito) {
        let allCarrito = this.getData()
        allCarrito.forEach(carrito => {
            if(carrito.id === idCarrito){
                carrito.producto = carrito.producto.filter(producto => producto.id != idProducto);
                
            }
        });

        fs.writeFileSync(path.join(__dirname, this.fileName), JSON.stringify(allCarrito, null, ' '));
        return true;
    }


}






module.exports = Carrito;