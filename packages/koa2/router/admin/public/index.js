const Router = require('koa-router');
const router = new Router({ prefix: '/public' });

const { 
  uploadPic
} = require('@/controllers/public');

router.post("/:pathId/:index/:modular/pic", uploadPic);

// router.delete("/:url/pic", deletePic);

module.exports = router.routes();