const upload = require('@/utils/multer');

class PublicController {
  // 上传图片
  static async uploadPic(ctx, next) {
    await upload(ctx.params).array('file',5)(ctx, next);
    ctx.send();
  }

  // 删除图片
  static async deletePic(ctx) {
    // 判断给定的路径是否存在
    const { url } = ctx.params;
    if (fs.existsSync(url)) {
      fs.unlinkSync(url);
      ctx.send();
    } else {
      ctx.send(null, '给定的路径不存在，请给出正确的路径', 404);
    }
  }
};

module.exports = PublicController;