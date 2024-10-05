const { DataTypes } = require('sequelize');
const sequelize = require('../Config/Database.js');
const Product = require('./Product');
const User = require('./User');

const Cart = sequelize.define('Cart', {
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  ProductId: {type: DataTypes.INTEGER, allowNull: false, defaultValue:1}
});

Cart.belongsTo(User);
Cart.belongsTo(Product);

module.exports = Cart;
