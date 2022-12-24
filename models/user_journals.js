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
      // define association here
    }
  }
  User_Journals.init(
    {
      userId: DataTypes.INTEGER,
      journalId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User_Journals',
      tableName: 'user_journals'
    }
  )
  return User_Journals
}
