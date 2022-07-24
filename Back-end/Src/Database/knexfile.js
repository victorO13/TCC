
require('dotenv').config()
//console.dir(process.env)
module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
