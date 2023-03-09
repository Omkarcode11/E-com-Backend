const { DataTypes } = require('sequelize');

module.exports = (connection, datatypes) => {
  let User = connection.define('user', {
    id: {
      type: datatypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: datatypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: datatypes.STRING,
      allowNull: false,
    },
    address: {
      type: datatypes.STRING,
    },
    phone: {
      type: datatypes.STRING,
      unique: true,
    },
    role: {
      type: datatypes.STRING,
      defaultValue: 'user',
    },
    picture: {
      type: DataTypes.STRING,
    },
    password:{
      type : datatypes.STRING,
      allowNull:false
    }
  });
  return User;
};
