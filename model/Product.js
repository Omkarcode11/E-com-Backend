const { DataTypes } = require("sequelize");

module.exports = (connection, datatypes) => {
  let Product = connection.define("product", {
    id: {
      type: datatypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: datatypes.STRING,
      allowNull: false,
    },
    price: {
      type: datatypes.BIGINT,
      allowNull: false,
    },
    description: {
      type: datatypes.TEXT,
      allowNull: false,
    },
    quantity: {
      type: datatypes.BIGINT,
      defaultValue: 1,
    },
    img: {
      type: datatypes.STRING,
      allowNull: false,
    },
    rating: {
      type: datatypes.BIGINT,
      allowNull: false,
    },
  });
  return Product;
};
