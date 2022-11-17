module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreYApellido: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombreDeUsuario: {
            type: dataTypes.STRING,
            allowNull: true,
            unique: true
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false
        },
        domicilio: {
            type: dataTypes.STRING,
            allowNull: true
        },
    
        email: {
            type: dataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Se requiere del email"
                },
                isEmail: {
                    args: true,
                    msg: "Email invalido"
                }
            },
            unique: true
        },
        imagen:{
            type:dataTypes.STRING
        },
        tipoDeUsuario:{
            type:dataTypes.INTEGER,
            allowNull: true
        },
        fechaDeNacimiento:{
            type:dataTypes.DATE,
            allowNull: false
        }
    }
    let config = {
        tableName: "usarios",
        timestamps: true
    }

    const Usuario = sequelize.define(alias, cols, config)
    // hasMany -> Curso
    Usuario.associate = function (models) {
        Usuario.hasMany (models.Curso, {
            as: "cursos",

            foreignKey: "idUsuarios"
        })
    }

    return Usuario;
}