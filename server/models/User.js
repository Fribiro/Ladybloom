const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define("User", {
    UsersId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    UserRole: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: false
    },
    UserEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserToken: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = User;