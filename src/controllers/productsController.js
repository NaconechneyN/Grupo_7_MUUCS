const getCourses = require("../utils/getCourses")
const setCourses = require("../utils/setCourses")
const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

const productController = {
    productList: (req, res) => {
        const courses = getCourses()

        res.render("productList", { cursos: courses, titulo: "listado de producto" })
    },
    productListCarrito: (req, res) => {
        const courses = getCourses()

        res.render("productCart", { cursos: courses, titulo: "Carrito de producto" })
    },
    productDetail: (req, res) => {
        const courses = getCourses()
        const courseId = req.params.id

        const courseItem = courses.filter(course => course.id == courseId)

        const context = courseItem[0]


        res.render("productDetail", { nombre: context, titulo: "detalle de producto" })
    },


    productCreate: (req, res) => {
        res.render("productCreate", { titulo: "Creacion de producto" })
    },

    productCreate1: (req, res) => {

        let errors = validationResult(req)

        if(errors != null){
            res.render("productCreate", { titulo: "Creacion de producto" , errors : errors})
        }


        const curso = req.body;

        const courses = getCourses();


        curso.id = (courses.length + 1);
        curso.actualizacion = Date.now();
        curso.valoracion = 0;
        curso.numeroDeRegistarados = 0;
        curso.imagen = req.file.filename

        console.log(req.file);

        courses.push(curso);

        setCourses(JSON.stringify(courses));


        res.render("productCreate", { titulo: "Creacion de producto" })
    },

    productEdit: (req, res) => {
        const id = req.params.id;

        const courses = getCourses();

        const curso = courses.filter(course => course.id == id);

        const curso1 = curso.shift();

        console.log(curso1);




        res.render("productEdit", { titulo: "Edicion de producto", curso: curso1 })
    },

    productEdit1: (req, res) => {


        const curso = req.body;

        const courses = getCourses();

        courses.forEach(curso => {
            if (curso.id == req.body.id) {

                curso.titulo = req.body.titulo,
                curso.descripcion = req.body.descripcion,
                curso.descripcionQueAprenderas = req.body.descripcionQueAprenderas,
                curso.tipoDeEnsenianza = req.body.tipoDeEnsenianza,
                curso.certifiacion = req.body.certifiacion,
                curso.QuienLoImparte = req.body.QuienLoImparte,
                curso.precio = req.body.precio,
                curso.duracion = req.body.duracion,
                curso.actualizacion = req.body.actualizacion
                if (req.file != null) {
                    curso.imagen = req.file.filename
                }
                
            }
        })
        setCourses(JSON.stringify(courses));
        console.log(req.body)

        res.render('index', { titulo: 'Home' })


    },
    productDelete: (req, res) => {
        let courses = getCourses() 

        const id = req.params.id

        

        const cursos = courses.filter(course => course.id != id)
        const imagen= ({},courses.filter(course => course.id == id)).pop()

        console.log(imagen)
    

        fs.unlinkSync(path.join(__dirname, `../../public/img/products/${imagen.imagen}`))
          
        setCourses(JSON.stringify(cursos))
        
        let curso1 = getCourses() 


        res.render("productList", { cursos: curso1, titulo: "listado de producto" })

    }

    

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