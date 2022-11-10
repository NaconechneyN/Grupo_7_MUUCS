module.exports ={
  "development": {
    "dialect": "sqlite",
    "storage": "./data/dev.db"
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
