const { tiposDeEnsenianzas } = require('./testData')
const { insertRow } = require('./utils')

const TiposDeEnsenianzas = async db => {
    const model = db.TipoDeEnsenianza
    
    const initialRows = await model.count()

    return new Promise(async resolve => {
        tiposDeEnsenianzas.forEach(async tipoDeEnsenianzas => {
            try {
                const row = await insertRow(tipoDeEnsenianzas, model)
            } catch(err) {
                
            }
        })
        resolve({
            tableName: model.getTableName(),
            rowsToInsert: tiposDeEnsenianzas.length,
            rowsInserted: await model.count() - initialRows
        })
    })
}

module.exports = TiposDeEnsenianzas