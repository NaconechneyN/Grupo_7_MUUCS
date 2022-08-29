const path = require('path');

const cursos = [
    { 
    titulo: "Calculo",
    descripcion: "En este curso aprenderás desde las bases de calculo matemático hacia temas más avanzados",
    tipoDeEnseñanza: "A demanda",
    descripcionQueAprenderás:"Aprenderás sobre las estructuras de calculo, diferentes operadores, estructura y orden de los elementos",
    certificacion: "Certificacion oficial",
    QuienLoImparte: "UTN" ,
    actulizacion: "julio 2022",
    valoracion: "8",
    numeroDeRegistarados: 13255,
    duracion: "5 meses",
    precio: "$40264"
    },
    { 
    titulo: "HTTP a HTTPS",
    descripcion: "Guía completa 2021 para crear, instalar, renovar y administrar un certificado SSL web gratuito; di adiós al No seguro",
    tipoDeEnseñanza: "A demanda",
    descripcionQueAprenderás:"Habilitar la conexión segura de tu sitio web, crear, implementar, renovar y eliminar un certificado SSL en tu sitio web",
    certificacion: "Certificacion oficial",
    QuienLoImparte: "Digital Hause" ,
     actulizacion: "enero 2022",
    valoracion: "9",
    numeroDeRegistarados: 5612,
    duracion: "1 mes",
    precio: "$15000"
    },
    { 
    titulo: "mecanica automotriz computarizada",
    descripcion:"Inspeccionan, diagnostican, reparan, prueban y dan mantenimiento a los sistemas y componentes mecánicos y electrónicos de automóviles livianos, buses y camiones",
    tipoDeEnseñanza: "A demanda",
    descripcionQueAprenderás:"Preparar logística del taller de mantenimiento automotriz, de acuerdo a procedimientos técnicos, políticas de la empresa y normatividad vigente",
    certificacion: "Certificacion oficial",
    QuienLoImparte: "IMA" ,
    actulizacion: "agosto2022",
    valoracion: "10",
    numeroDeRegistarados: 11258,
    duracion: "12 meses",
    precio: "$52000"
    },    
    { 
    titulo: "arduino",
    descripcion: "Aprende a hacer tu primer videojuego con Arduino",
    tipoDeEnseñanza: "A demanda",
    descripcionQueAprenderás:"Aprende a manejar Pantallas Oled con imágenes en movimiento, Aprende y realiza ejercicios de lectura de conversores Análogos y digitales",
    certificacion: "Certificacion oficial",
    QuienLoImparte: "Udemy" ,
    actulizacion: "enero 2022",
    valoracion: "9",
    numeroDeRegistarados: 457482,
    duracion: "9 meses",
    precio: "$72000"
    }        
]
const controllers = {
    index: (req, res) => res.render('index', {title: 'Home'}),
    login: (req, res) => res.render('login',{title: 'Login'}),
    productCart: (req, res) => res.render('productCart',{title: 'ProductCart'}),
    productDetail: (req, res) => res.render('productDetail',{title: 'ProductDetail'}),
    register: (req, res) => res.render('register',{title: 'Register'}),
}

module.exports = controllers;