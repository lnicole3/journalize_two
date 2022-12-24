'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pages.belongsTo(models.Journal, { foreignKey: 'journalId' })
    }
  }
  Pages.init(
    {
      content: DataTypes.STRING,
      mood: DataTypes.STRING,
      journalId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'journal',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Pages',
      tableName: 'pages'
    }
  )
  return Pages
}
