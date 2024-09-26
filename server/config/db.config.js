const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT || 5432,
        "define": {
            timestamps: false
        }
    });
try {
    //console.log(process.env.DATABASE_USER,process.env.DATABASE_PASSWORD);
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


module.exports = sequelize;