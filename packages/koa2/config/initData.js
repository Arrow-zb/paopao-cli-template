const {
  UserModel,
  PathModel,
  CategoryModel,
  LayoutModeModel,
  BannerModeModel,
  ModularModel
} = require('../models');

async function init() {
  await UserModel.create({
    userName: 'arrow',
    password: '123456'
  });

  await PathModel.create({
    category: 'arr',
    path: '/test',
    description: 'this is test'
  });

  await CategoryModel.bulkCreate([
    {
      category: 'arr',
      description: 'this is test'
    },
    {
      category: 'foo',
      description: 'this is foo'
    }
  ], { validate: true });

  await LayoutModeModel.bulkCreate([
    {
      modeId: 1,
      text: "上中下",
      description: '这是上中下'
    }
  ], { validate: true });

  await BannerModeModel.bulkCreate([
    {
      modeId: 1,
      text: "轮播图",
      description: '这是轮播图，需要上传多张图片'
    },
    {
      modeId: 2,
      text: "文本及操作",
      description: '输入文本以及编辑按钮'
    }
  ], { validate: true });

  await ModularModel.bulkCreate([
    {
      modular: "banner-modular",
      text: "Banner",
      description: 'Banner 模块'
    },
    {
      modular: "footer-modular",
      text: "Footer",
      description: 'Footer 模块'
    }
  ], { validate: true });
}

module.exports = init;