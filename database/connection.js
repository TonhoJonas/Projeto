const Sequelize = require("sequelize")

const connection = new Sequelize('agritech4', 'root', 'familia100', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection