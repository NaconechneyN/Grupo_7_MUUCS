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
            allowNull: true
        },
        calificacion: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "votos",
        timestamps: false
    }

    const Voto = sequelize.define(alias, cols, config)
   
    Voto.associate = function (models) {
        Voto.belongsTo(models.Curso, {
            as: "cursos",

            foreignKey: "idCursos"
            
        })
    }
    

    return Voto
}