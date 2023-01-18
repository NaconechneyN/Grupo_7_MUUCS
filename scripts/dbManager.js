const db = require('../src/database/models/index')
const { insertWithLog } = require('./utils')


const syncTables = force => {
    return new Promise(async resolve => {
        await db.sequelize.sync({force: force})
        resolve()
    })
}

const populate = async (tables) => {
    for (table of tables) {
        try { 
            const func = require(`./${table}`)
            await insertWithLog(table, db, func)
        } catch(err) {
            continue
        }
    }
}

const useArgs = async () => {
    for (arg of process.argv) {
        if (arg.startsWith('--')) {
            const [key, values] = arg.split('=')
            switch (key) {
                case '--sync':
                    await syncTables(values ? values === 'true' : true)
                    break
                
                case '--populate':
                    populate(values.split('-'))
                    break

                default:
                    break
            }
        }
    }
}

useArgs()
