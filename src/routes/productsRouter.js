// Se crea el router
const express = require("express")
// Utilizamos la siguiente funcion para crear un objeto de enrutador y manejar solicitudes
const router = express.Router()
// Requerimos el middleware multer para subir archivos
const multer = require("multer")
// Requerimos path para poder manejar rutas relativas y absolutas
const path = require('path');
// Requerimos el modulo de express validator (conjunto de middlewares)para realizar la validación de entrada desde el lado del servidor.
const { body } = require('express-validator')
// 
const validateProduct = require('../middlewares/mildwareProductsForm')

// utilizamos multer
const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null, './public/img/products');
    },
    filename: function (req,file,cb) {
        cb(null, `${Date.now()}_img${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage });

// Se importa el controlador
const productsControllers = require("../controllers/productsController")
// Ruta a products
router.get("/", productsControllers.productList)
// Ruta a un producto en particular por su ID
router.get("/detail/:id", productsControllers.productDetail)
// Ruta a form para crear un nuevo producto
router.get("/create", productsControllers.productCreate)
//
router.post("/create",[upload.single("imagen"), validateProduct], productsControllers.productCreate1)
// Ruta a traves de ID para modificar un producto
router.get("/:id/editar", productsControllers.productEdit)
//
router.put("/editar",[upload.single("imagen"), validateProduct], productsControllers.productEdit1)
// Ruta a lista de productos
router.get("/carritoT", productsControllers.productListCarrito)
// Ruta a traves de ID para eliminar un producto
router.delete("/delete/:id", productsControllers.productDelete)

/*
router.get("/", productsControllers.coursesList)


router.get("/create", productsControllers.courseCreateForm)

router.get("/:id", productsControllers.courseDetail)
router.put("/:id", productsControllers.courseEdit)
router.delete("/:id", productsControllers.courseDelete)
router.get("/:id/edit", productsControllers.courseEditForm)
*/
module.exports = router;