'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Journals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Journals.init(
    {
      title: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Journals',
      tableName: 'journals'
    }
  )
  return Journal
}
