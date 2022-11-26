const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const  {  v4 : uuidv4  }  =  require ( 'uuid' ) 
const product = require("../models/Products")
const carrito = require("../models/Carrito")
const db = require("../database/models")

//const db = require("../../database/models") 

const productController = {
    productList: (req, res) => {
        db.Curso.findAll({
            raw: true
          })
          .then((cursos) => {
            console.log(cursos)		
            res.render("productList", { cursos: cursos, titulo: "listado de producto", dueño : 0})
          })
        /*const courses = product.findAll()

        res.render("productList", { cursos: courses, titulo: "listado de producto", dueño : 0})*/
    },
    productListCarrito: (req, res) => {
        const courses = carrito.findByPk(req.body.idCarrito).producto

        res.render("productCart", { cursos: courses, titulo: "Carrito de producto" })
    }
    ,
    productDetail: (req, res) => {
        const id = req.params.id
        const courseItem = product.findByPk(id)

        res.render("productDetail", { nombre: courseItem, titulo: "detalle de producto" })
    },
    productMiList: (req, res) => {
        console.log(req.session.usuarioLogueado)
        const courses = product.filterByField("dueño", req.session.usuarioLogueado.nombreyapellido)



        res.render("productList", { cursos: courses, titulo: "listado de producto", dueño : 1})
    },
    /*productCreate: (req, res) => {
            db.Curso.findAll()
                .then(function(cursos) {
                    return res.render ("productList", {cursos: cursos})
                })
        },
        productCreate1: (req, res) => {
            db.Curso.create({
                    curso.actualizacion = Date.now();
                    curso.valoracion = 0;
                    curso.numeroDeRegistarados = 0;
                    curso.imagen = req.file.filename
                    curso.dueño = req.session.usuarioLogueado.nombreyapellido
            });
                res.redirect('/');

               }

    },*/

    productCreate: (req, res) => {
        res.render("productCreate", { titulo: "Creacion de producto" })
    },

    productCreate1: (req, res) => {

        let errors = validationResult(req)
        console.log(errors.mapped())
        console.log(req.session)

        if (errors.isEmpty()) {
            const curso = req.body;

            curso.actualizacion = Date.now();
            curso.valoracion = 0;
            curso.numeroDeRegistarados = 0;
            curso.imagen = req.file.filename
            curso.dueño = req.session.usuarioLogueado.nombreyapellido

            product.create(curso)

            res.redirect('/');
        }
        else{
            res.render("productCreate", { titulo: "Creacion de producto", errors: errors.mapped(), oldDate : req.body })
        }

    },

    productEdit: (req, res) => {
        const id = req.params.id
        console.log(id)
        const curso = product.findByPk(id)
        console.log(curso)
        res.render("productEdit", { titulo: "Edicion de producto", curso: curso}) 
        
        
    },

    productEdit1: (req, res) => {
        console.log(req.body)
        let errors = validationResult(req)

        console.log(errors.mapped())

        if (errors.isEmpty()) {
            console.log(req.body)
            product.edit(req.body)
            
            res.redirect("/products/carritoT")

        }else{
            
            const curso = product.findByPk(req.body.id)
    
            res.render("productEdit", { titulo: "Edición de producto", errors: errors.mapped(), curso: curso})
        }




    },
    productDelete: (req, res) => {
        const curso = product.findByPk(req.body.id)
        product.delete(req.body.id)

        fs.unlinkSync(path.join(__dirname, `../../public/img/products/${curso.imagen}`))

        res.render("productList", { cursos: curso, titulo: "listado de producto" })

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