const fs = require("fs")
const path = require('path')
const tipoDeEnsenanzaPath = '../../data/tiposDeEnsenanza.json'
const { TipoDeEnsenanza } = require("../../database/models")

const findAll = (fileDir) => {
    return JSON.parse(
        fs.readFileSync(
            path.resolve(__dirname, fileDir),
            'utf-8'
        )
    )
}

const cargarTiposDeEnsenanza =  () => {
    const tipos = findAll(tipoDeEnsenanzaPath);
    tipos.forEach(async tipo => {
        try {
            const tipoEnsenanza = await TipoDeEnsenanza.create({
                nombre: tipo.nombre,
                descripcion: tipo.descripcion
            })
        } catch (error) {
            console.log(error)
        } 
   });
}

cargarTiposDeEnsenanza();