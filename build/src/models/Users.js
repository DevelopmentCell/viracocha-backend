"use strict";
const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("users", {
        ID: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.INTEGER,
        },
        score: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 300,
            },
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        timestamps: false,
    });
};
