const Sequelize = require("sequelize")

const connection = new Sequelize('agritechacademy', 'root', 'familia100', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection