const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
	const PathDetail = sequelize.define('pathDetail', {
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  });

  PathDetail.associate = models => {
    PathDetail.belongsTo(models.PathModel, {
      foreignKey: {
        name: "pathId",
        allowNull: false
      }
    })
  }

  return PathDetail;
};