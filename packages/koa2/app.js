const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const { addAlias } = require('module-alias');

addAlias('@', __dirname);

const send = require('@/utils/send');

const client = require("@/router/client");
const admin = require("@/router/admin");

const { sequelize } = require('./models');
const { PORT } = require('./config');
const initData = require('./config/initData');

const app = new Koa();
const router = new Router();

// 中间件
app.use(bodyParser({
  multipart: true
}));
app.use(logger());
app.use(send());

// 路由
app.use(client);
app.use(admin);
app.use(router.allowedMethods());

// 启动服务
(async function() {
  try {
    await sequelize.authenticate();
    console.log('Mysql connection ok!');
    sequelize
      .sync({ force: true })
      .then(() => {
        initData();
        app.listen(PORT, err => {
          if(err) throw err;
          console.log(`App start at ${PORT}!`);
        });
      })
  } catch (error) {
    console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
  }
})();


