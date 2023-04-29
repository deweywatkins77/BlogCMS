const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Posts extends Model{}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    creator:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdDate:{
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    hooks: {},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Posts',
  }
)

module.exports = Posts