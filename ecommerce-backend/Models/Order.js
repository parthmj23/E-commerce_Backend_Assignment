const { DataTypes } = require('sequelize');
const sequelize = require('../Config/Database.js');
const User = require('./User');

const Order = sequelize.define('Order', {
  products: { type: DataTypes.JSON, allowNull: false },
  totalPrice: { type: DataTypes.FLOAT, allowNull: false },
  ProductId: {type: DataTypes.INTEGER, allowNull: false, defaultValue:1},
  status: { type: DataTypes.STRING, defaultValue: 'pending' }
});

Order.belongsTo(User);

module.exports = Order;
