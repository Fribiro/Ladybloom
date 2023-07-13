const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const Role = sequelize.define("Role", {
    RoleId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    RoleName: {
        type: Sequelize.STRING,
        allowNull: false
    }


});

module.exports = Role;