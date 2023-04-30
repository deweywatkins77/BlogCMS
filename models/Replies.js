const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Replies extends Model{}

Replies.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        post_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        reply_content: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
        reply_creator:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reply_date:{
          type: DataTypes.DATEONLY,
          defaultValue: DataTypes.NOW,
          allowNull: false
        }
      },
      {
        hooks: {},
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'replies',
      }
)

module.exports = Replies