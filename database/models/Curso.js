const { Voto } = require("./")
module.exports = (sequelize, dataTypes) => {
    let alias = "Curso"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        certificacion: {
            type: dataTypes.BOOLEAN,
        },
        id_usuario: {
          type: dataTypes.INTEGER
        },
        precio: {
            type: dataTypes.DECIMAL
        },
        finalizacion: {
            type: dataTypes.DATE
        },
        actualizacion: {
            type: dataTypes.DATE
        },
        valoracion: {
            type: dataTypes.DECIMAL
        },
        id_categoria:{
            type:dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "cursos",
        timestamps: true
    }

    const Curso = sequelize.define(alias, cols, config)

    Curso.associate = function (models) {
        Curso.hasMany(models.Voto, {
            as: "votos",
            foreignKey: "id_cursos"
        })
        //belongsTo -> Categoria
        //belongsTo -> Usuario
        //belongsTo -> TipoDeEnsenanza
    }
   

    return Curso
}