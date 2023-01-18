const { categorias } = require('./testData')
const { insertRow } = require('./utils')

const Categorias = async db => {
    const model = db.Categoria
    
    const initialRows = await model.count()

    return new Promise(async resolve => {
        categorias.forEach(async categoria => {
            try {
                const row = await insertRow(categoria, model)
            } catch(err) {
                
            }
        })
        resolve({
            tableName: model.getTableName(),
            rowsToInsert: categorias.length,
            rowsInserted: await model.count() - initialRows
        })
    })
}

module.exports = Categorias