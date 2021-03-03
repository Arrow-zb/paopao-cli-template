const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		userId: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true
		},
		userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      comment: '通过 bcrypt 加密后的密码'
    },
    email: {
      type: DataTypes.STRING(50),
      validate: {
        isEmail: true
      }
    },
    role: {
      type: DataTypes.TINYINT,
      defaultValue: 2,
      comment: '用户权限：1 - admin, 2 - 普通用户'
    },
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
  },{
    initialAutoIncrement: 609000000
  });

  return User;
};
