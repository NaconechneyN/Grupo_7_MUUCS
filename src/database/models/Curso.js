module.exports = (sequelize, dataTypes) => {
    let alias = "Curso"
    let cols = {
        idCursos: {
            type: dataTypes.STRING,
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
        descripcionQueAprenderas: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        certificacion: {
            type: dataTypes.STRING,
        },
        idUsuarios: {
          type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.DECIMAL
        },
        duracion: {
            type: dataTypes.STRING
        },
        actualizacion: {
            type: dataTypes.DATE
        },
        valoracion: {
            type: dataTypes.DECIMAL,
            allowNull: true
        },
        idCategorias:{
            type:dataTypes.INTEGER
        }, 
        idtipoDeEnsenianza:{
            type:dataTypes.INTEGER
        },
        imagen:{
            type:dataTypes.STRING
        }

    }
    let config = {
        tableName: "cursos",
        timestamps: false
    }

    const Curso = sequelize.define(alias, cols, config)

    Curso.associate = function (models) {
        //hasMany -> Voto
        Curso.hasMany(models.Voto, {
            as: "votos",
            foreignKey: "idCursos"
        }),
        //belongsTo -> Categoria
        Curso.belongsTo(models.Categoria, {
            as: "categorias",
            foreignKey: "idCategorias"
        }),
        //belongsTo -> Usuario
        Curso.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "idUsuarios"
        }),
        //belongsTo -> TipoDeEnsenanza
        Curso.belongsTo(models.TipoDeEnsenianza, {
            as: "tiposDeEnsenianza",
            foreignKey: "idtipoDeEnsenianza"
        })
    }
   

    return Curso
}