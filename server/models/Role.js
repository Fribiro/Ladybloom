const Sequelize = require('sequelize');
const sequelize = require('./config/db.Config');

const Role = sequelize.define("Role", {
    RoleName: {
        type: Sequelize.DataTypes,
        allowNull: false
    }


});

module.exports = Role;