const Sequelize = require('sequelize')
require('dotenv').config()

let sequelize

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  )
}

module.exports = sequelize