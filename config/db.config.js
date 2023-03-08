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
  DB: dbConfig.DB,
  USER: dbConfig.USER,
  PASSWORD: dbConfig.PASSWORD,
  DIALECT: dbConfig.DIALECT,
  HOST: dbConfig.HOST,
  PORT: dbConfig.PORT,
};

module.exports = {
  development: developmentInstance,
  production: productionInstance,
};

