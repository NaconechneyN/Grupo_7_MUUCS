const getCourses = require("../utils/getCourses")
const setCourses = require("../utils/setCourses")

const productController = {
    productDetail: (req, res) => {
        /*const courses = getCourses() 
        const courseId = req.params.id

        const courseItem = courses.cursos.filter(course => course.id == courseId)

        const context = courseItem[0]
        console.log(context)*/

        res.render("productDetail", /*context*/)
    },
    
    /*productList: (req, res) => {
        const courses = getCourses() 
        const cursos = courses
        
        res.render("productList", cursos)
    }, 
    prductDetail: (req, res) => {
        const courses = getCourses() 
        const courseId = req.params.id

        const courseItem = courses.cursos.filter(course => course.id == courseId)

        const context = courseItem[0]
        console.log(context)

        res.render("prductDetail", context)
    },
    productCreateForm: (req, res) => {
        res.render("coursesCarga")
    },
    courseCreate: (req, res) => {
        let courses = getCourses() 
        const length = courses.cursos.length
        const newCourse = {
            id: length + 1,
            titulo: req.body.titulo,
            precio: req.body.precio
        }

        courses.cursos.push(newCourse)
        setCourses(JSON.stringify(courses))

        res.redirect("/courses")
    },
    courseEditForm: (req, res) => {
        const courses = getCourses() 
        const courseId = req.params.id

        const courseItem = courses.cursos.filter(course => course.id == courseId)

        const context = {
            id: courseId,
            titulo: courseItem[0].titulo,
            precio: courseItem[0].precio
        }


        res.render("courseEdi", context)
    },
    courseEdit: (req, res) => {
        const courses = getCourses() 
        const courseId = req.params.id

        courses.cursos.forEach(curso => {
            if (curso.id == courseId) {
                curso.titulo = req.body.titulo,
                curso.precio = req.body.precio
            }
        })

        setCourses(JSON.stringify(courses))
        res.redirect(`/courses/${courseId}`)
    },
    courseDelete: (req, res) => {
        let courses = getCourses() 
        const courseId = req.params.id

        const cursos = courses.cursos.filter(course => course.id != courseId)

        courses = {
            cursos: cursos
        }

        setCourses(JSON.stringify(courses))
        res.redirect("/courses")
    }*/
}

module.exports = productController;