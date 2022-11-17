module.exports = (sequelize, dataTypes) => {
    let alias = "TipoDeEnsenianza"
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
        tableName: "tiposDeEnsenianza",
        timestamps: true
    }

    const TipoDeEnsenianza = sequelize.define(alias, cols, config)
    // hasMany -> Curso
    TipoDeEnsenianza.associate = function (models) {
        TipoDeEnsenianza.hasMany (models.Curso, {
            as: "cursos",

            foreignKey: "idtipoDeEnsenianza"
        })
    }
    
    return TipoDeEnsenianza
}