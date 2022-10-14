// Se crea el router
const express = require("express")
const router = express.Router()

const multer = require("multer")
const path = require('path');

const { body } = require('express-validator')

const validateUser = require('../middlewares/mildwareProductsForm')


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

router.get("/", productsControllers.productList)


router.get("/detail/:id", productsControllers.productDetail)

router.get("/create", productsControllers.productCreate)

router.post("/create",[upload.single("imagen"), validateUser], productsControllers.productCreate1)

router.get("/:id/editar", productsControllers.productEdit)

router.put("/editar",[upload.single("imagen"), validateUser], productsControllers.productEdit1)

router.get("/carritoT", productsControllers.productListCarrito)

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