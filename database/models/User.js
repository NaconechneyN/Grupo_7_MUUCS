module.exports = (sequelize, dataTypes) => {
    let alias = "User"
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
            allowNull: false,
            unique: true
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false
        },
        domicilio: {
            type: dataTypes.STRING,
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
        }
    }
    let config = {
        tableName: "users",
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config)
    // hasMany -> Curso
    return User
}