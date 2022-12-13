const db = require("../../database/models/index")
db.sequelize.sync({force: true})