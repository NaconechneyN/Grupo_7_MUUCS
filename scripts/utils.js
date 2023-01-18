const insertRow = (data, model) => {
    return new Promise(async (resolve, reject) => {
        try {
            const row = await model.create(data)
            resolve(row)
        } catch(err) {
            reject(err)
        }
    })
}

const insertWithLog = (table, db, callback) => {
    return new Promise(async resolve => {
        process.stdout.write('\033[1m'+`-> Insertando filas en la tabla ${table}... `)
        const result = await callback(db)
        process.stdout.write('\033[32;1m'+`${result.rowsInserted}/${result.rowsToInsert}\n`+'\033[0m')
        resolve()
    })
}

module.exports = {
    insertWithLog,
    insertRow
}