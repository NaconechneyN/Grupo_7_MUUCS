// Se crea el router
const express = require("express")
const router = express.Router()

// Se importa el controlador
const productsControllers = require("../controllers/productsController")

router.get("/detail", productsControllers.productDetail)
/*
router.get("/", productsControllers.coursesList)
router.post("/", productsControllers.courseCreate)

router.get("/create", productsControllers.courseCreateForm)

router.get("/:id", productsControllers.courseDetail)
router.put("/:id", productsControllers.courseEdit)
router.delete("/:id", productsControllers.courseDelete)
router.get("/:id/edit", productsControllers.courseEditForm)
*/
module.exports = router;