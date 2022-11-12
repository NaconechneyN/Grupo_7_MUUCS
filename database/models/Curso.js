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
        DESCRIPCION: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        certificacion: {
            type: dataTypes.BOOLEAN,
        },
        //idUsuario: {
         //   type: dataTypes.INTERGER
        //},
        precio: {
            type: dataTypes.DECIMAL
        },
        duracion: {
            type: dataTypes.TIME
        },
        actualizacion: {
            type: dataTypes.DATE
        },
        valoracion: {
            type: dataTypes.DECIMAL
        },
        idcategoria:{
            type:dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "cursos",
        timestamps: true
    }

    const Curso = sequelize.define(alias, cols, config)
    return Curso
}