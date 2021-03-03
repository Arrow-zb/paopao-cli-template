const fs = require('fs');
const path = require('path');
const { DB } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(DB.database, DB.user, DB.password, DB.options);

const db = {};

// 模型引入
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    const key = model.name.slice(0, 1).toUpperCase() + model.name.slice(1) + 'Model';
    db[key] = model;
  });

// 表关联
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;