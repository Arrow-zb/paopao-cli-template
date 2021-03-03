const { 
  PathModel, 
  CategoryModel, 
  LayoutModeModel, 
  ModularModel 
} = require('../models');

class PagesController {
  // 增加落地页 URL
  static async createPages(ctx) {
    const { category, path } = ctx.request.body;
    const hasPath = await PathModel.findAll({
      where: { category, path }
    });
    if(hasPath.length > 0) {
      ctx.send(null, '此url已被占用！', 403);
    }else {
      ctx.send(await PathModel.create(ctx.request.body));
    }
  };

  // 获取分类
  static async getCategories(ctx) {
    ctx.send(await CategoryModel.findAll());
  };

  // 获取布局模式
  static async getLayoutModes(ctx) {
    ctx.send(await LayoutModeModel.findAll());
  };

  // 获取模块类型
  static async getModulars(ctx) {
    ctx.send(await ModularModel.findAll());
  };
};

module.exports = PagesController;