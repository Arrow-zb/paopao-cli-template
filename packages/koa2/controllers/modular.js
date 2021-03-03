const { 
  ModularModel 
} = require('../models');

class ModularController {
  // 获取模块类型
  static async getModularList(ctx) {
    ctx.send(await ModularModel.findAll());
  };
};

module.exports = ModularController;