module.exports = (sequelize, dataTypes) => {
    let alias = "Categoria"
    let cols = {
        idCategorias: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false 
        }/*,
        idCategoriasM: {
            type: dataTypes.INTEGER,
            allowNull: false 
        }*/
    }
    let config = {
        tableName: "categorias",
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config)
    // hasMany -> Curso
    Categoria.associate = function (models) {
        Categoria.hasMany (models.Curso, {
            as: "cursos",

            foreignKey: "idCategorias"
        })
    }
    
    return Categoria
}