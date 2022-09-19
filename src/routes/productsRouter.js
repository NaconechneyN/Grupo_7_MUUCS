// Se crea el router
const express = require("express")
const router = express.Router()

// Se importa el controlador
const productsControllers = require("../controllers/productsController")

router.get("/detail/:id", productsControllers.productDetail)

router.get("/create", productsControllers.productCreate)

router.post("/create", productsControllers.productCreate1)
/*
router.get("/", productsControllers.coursesList)


router.get("/create", productsControllers.courseCreateForm)

router.get("/:id", productsControllers.courseDetail)
router.put("/:id", productsControllers.courseEdit)
router.delete("/:id", productsControllers.courseDelete)
router.get("/:id/edit", productsControllers.courseEditForm)
*/
module.exports = router;