const Router = require('koa-router');
const router = new Router({ prefix: '/admin' });

const pages = require('./pages');
const modular = require('./modular');
const banner = require('./banner');
const public = require('./public');

router.get("/", async ctx => {
  ctx.body = "admin";
});

router.use(pages);
router.use(modular);
router.use(banner);
router.use(public);

module.exports = router.routes();