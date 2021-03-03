const Router = require('koa-router');
const router = new Router({ prefix: '/modular' });

const { 
  getModularList 
} = require('@/controllers/modular');

router.get("/list", getModularList);

module.exports = router.routes();