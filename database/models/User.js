module.exports = (sequelize, dataTypes) => {
    let alias = "User"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreyapellido: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
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
    return User
}