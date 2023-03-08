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
  DB: process.env.DB,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DIALECT: process.env.DIALECT,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
};

module.exports = {
  development: developmentInstance,
  production: productionInstance,
};

