const { 
  BannerModeModel 
} = require('../models');

const upload = require('@/utils/multer');

class BannerController {
  // 获取 Banner 模式
  static async getBannerModes(ctx) {
    ctx.send(await BannerModeModel.findAll());
  };
};

module.exports = BannerController;