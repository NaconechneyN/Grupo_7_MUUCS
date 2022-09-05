// Se crea el router
const express = require("express")
const router = express.Router()

// Se importa el controlador
const coursesCotroller = require("../controllers/coursesController")

router.get("/", coursesCotroller.coursesList)
router.post("/", coursesCotroller.courseCreate)

router.get("/create", coursesCotroller.courseCreateForm)

router.get("/:id", coursesCotroller.courseDetail)
router.put("/:id", coursesCotroller.courseEdit)
router.delete("/:id", coursesCotroller.courseDelete)
router.get("/:id/edit", coursesCotroller.courseEditForm)

module.exports = router;