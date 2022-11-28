module.exports = (sequelize, dataTypes) => {
    let alias = "TipoDeEnsenianza"
    let cols = {
        

        idtipoDeEnsenianza : {
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
        tableName: "tipodeensenianza",
        timestamps: false
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