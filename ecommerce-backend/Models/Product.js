const { DataTypes } = require('sequelize');
const sequelize = require('../Config/Database.js');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  description: { type: DataTypes.TEXT },
  quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
});


module.exports = Product;
