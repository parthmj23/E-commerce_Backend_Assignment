const { DataTypes } = require('sequelize');
const sequelize = require('../Config/Database.js');
const bcrypt = require('bcrypt');



const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false } 
});

module.exports = User;