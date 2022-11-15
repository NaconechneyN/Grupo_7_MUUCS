module.exports = (sequelize, dataTypes) => {
    let alias = "Voto"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_curso: {
            type: dataTypes.INTEGER,
        },
        valoracion: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "votos",
        timestamps: true
    }

    const Voto = sequelize.define(alias, cols, config)
   
    Voto.associate = function (models) {
        Voto.belongsTo(models.Curso, {
            as: "cursos",

            foreignKey: "id_curso"
            
        })
    }
    

    return Voto
}