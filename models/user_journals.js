'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User_Journals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Journals.belongsTo(models.User, { foreignKey: 'userId' })
      User_Journals.hasMany(models.Journal, { foreignKey: 'journalId' })
    }
  }
  User_Journals.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      journalId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'journals',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User_Journals',
      tableName: 'user_journals'
    }
  )
  return User_Journals
}
