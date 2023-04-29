const {Models, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Replies extends Models{}

Replies.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        replyContent: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        replyCreator:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        replyDate:{
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
        modelName: 'user',
      }
)

module.exports = Replies