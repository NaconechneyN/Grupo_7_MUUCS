module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.TEXT,
        },
        idCategorias: {
            type: dataTypes.INTEGER,
        },
    }
    let config = {
        tableName: "categorias",
        timestamps: true
    }

    const Categoria = sequelize.define(alias, cols, config)
    return Categoria
}