module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
        }
    }
    let config = {
        tableName: "categorias",
        timestamps: true
    }

    const Categoria = sequelize.define(alias, cols, config)
    // hasMany -> Curso
    Categoria.associate = function (models) {
        Categoria.hasMany (models.Curso, {
            as: "cursos",

            foreignKey: "id_categoria"
        })
    }
    
    return Categoria
}