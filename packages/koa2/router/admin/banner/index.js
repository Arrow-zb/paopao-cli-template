const Router = require('koa-router');
const router = new Router({ prefix: '/banner' });

const { 
  getBannerModes,
} = require('@/controllers/banner');

router.get("/modes", getBannerModes);

module.exports = router.routes();