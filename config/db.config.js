const serverConfg = require('./server.config');
const dbConfig = require('./server.config')
const developmentInstance = {
  DB: "rajdhani",
  USER: "root",
  PASSWORD: "omkar",
  DIALECT: "mysql",
  HOST: "localhost",
  PORT: 3306,
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
const productionInstance = {
  DB: serverConfg.DB,
  USER: serverConfg.USER,
  PASSWORD: "q9JQQaDpVU",
  DIALECT: "mysql",
  HOST: "sql12.freesqldatabase.com",
  PORT: 3306,
};

module.exports = {
  development: developmentInstance,
  production: productionInstance,
};

