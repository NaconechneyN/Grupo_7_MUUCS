module.exports = (sequelize, dataTypes) => {
    let alias = "TipoDeEnsenanza"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            unique: true,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: "tiposDeEnsenanza",
        timestamps: true
    }

    const TipoDeEnsenanza = sequelize.define(alias, cols, config)
    // hasMany -> Curso
    
    return TipoDeEnsenanza
}