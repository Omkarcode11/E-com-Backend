let sequelize = require("sequelize");
let { DataTypes } = require("sequelize");
let env = process.env.NODE_ENV || "development";
let dbConfig = require("./../config/db.config")[env];

let db = {};

db.connection = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
});

db.sequelize = sequelize;
db.user = require("./User")(db.connection, DataTypes);
db.product = require("./Product")(db.connection, DataTypes);
db.category = require("./Category.js")(db.connection, DataTypes);

db.category.hasMany(db.product);
db.product.belongsTo(db.category);

module.exports = db;
