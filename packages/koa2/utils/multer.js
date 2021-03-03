const multer = require('@koa/multer');

const upload = (obj) => {
  const generateDir = require('./generateDir');

  const storage = multer.diskStorage({
    // 按照 path 上传图片
    destination: (ctx, file, cb) => {
      const pathNow = `uploads/${obj.pathId}`;
      generateDir(pathNow, cb(null, pathNow));
    },
    filename: (ctx, file, cb) => {
      // const extname = path.extname(file.originalname);
      // cb(null, `${file.fieldname}-${Date.now()}${extname}`);
      cb(null, `${obj.index}-${obj.modular}-${escape(file.originalname)}`);
    }
  });

  return multer({ storage });
};

module.exports = upload;