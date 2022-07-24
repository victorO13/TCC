// Update with your config settings.
//require('dotenv').config()
//console.dir(process.env)
module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'teste'
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
