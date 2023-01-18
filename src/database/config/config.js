module.exports = {
  "development": {"dialect": "sqlite",
  "storage": "./data/development.db",
  "logging": false
    /*"username": "root",
    "password": "",
    "database": "mydb",
    "host": "127.0.0.1",

    "dialect": "mysql",
    "port": "3306"*/
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "mydb",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3306"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "mydb",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3306"
  }
}
