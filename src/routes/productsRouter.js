// Se crea el router
const express = require("express")
const router = express.Router()

//requiero el multer ara usarlo y hago el upload
const multer = require('multer');
const storage = require("../middlewares/multerImgProducts");
const upload = multer({ storage })

// Se importa el controlador
const productsControllers = require("../controllers/productsController")

router.get("/", productsControllers.productList)

router.get("/detail/:id", productsControllers.productDetail)

router.get("/create", productsControllers.productCreate)

router.post("/create", productsControllers.productCreate1)

router.get("/:id/editar", productsControllers.productEdit)

router.put("/editar", productsControllers.productEdit1)

router.get("/carritoT", productsControllers.productListCarrito)

/*
router.get("/", productsControllers.coursesList)


router.get("/create", productsControllers.courseCreateForm)

router.get("/:id", productsControllers.courseDetail)
router.put("/:id", productsControllers.courseEdit)
router.delete("/:id", productsControllers.courseDelete)
router.get("/:id/edit", productsControllers.courseEditForm)
*/
module.exports = router;