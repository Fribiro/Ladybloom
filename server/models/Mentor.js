const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Mentor = sequelize.define("Mentor", {
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false,
        foreignKey: false
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NationalId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DateOfBirth: {
        type: DataTypes.DATE,
        allowNull: true
    },
    Profession: {
        type: DataTypes.STRING,
        allowNull: true  
    },
    County: {
        type: DataTypes.STRING,
        allowNull: true  
    },
    SubCounty: {
        type: DataTypes.STRING,
        allowNull: true  
    }
});

module.exports = Mentor;