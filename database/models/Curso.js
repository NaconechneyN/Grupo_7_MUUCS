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
        idUsuarios: {
          type: dataTypes.INTEGER
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
        id_categoria:{
            type:dataTypes.INTEGER
        }, 
        id_idtipoDeEnsenianza:{
            type:dataTypes.INTEGER
        }

    }
    let config = {
        tableName: "cursos",
        timestamps: true
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