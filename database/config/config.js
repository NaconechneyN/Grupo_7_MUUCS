module.exports ={
  "development": {
    "dialect": "sqlite",
    "storage": "./data/dev.db",
    "login": true
  },
  "test": {
    "dialect": "sqlite",
    "storage": "./data/test.sql"
  },
  "production": {
    "dialect": "sqlite",
    "storage": "./data/prod.sql"
  }
}
