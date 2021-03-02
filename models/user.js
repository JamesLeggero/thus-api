require('dotenv').config()
const { Sequelize, DataTypes } = require("sequelize");
const { PG_URI } = process.env
const sequelize = new Sequelize(PG_URI)

const User = sequelize.define('user', {
    // attributes
    user_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
      },
  }, {
      tableName: 'users',
      timestamps: false
    // options
  });

module.exports = User