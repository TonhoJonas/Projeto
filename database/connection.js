const Sequelize = require("sequelize")

const connection = new Sequelize('*nome do banco*', 'root', '*senha*', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection
