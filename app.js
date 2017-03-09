const Koa = require('koa');
const app = new Koa();
// const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const Router = require('koa-66');
const mountRouter = new Router();
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./app/routes/index');
const users = require('./app/routes/users');
// const index = require('./routes/index');
// const create = require('./routes/create');
// const users = require('./routes/users');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/app/views', {
  extension: 'jade'
}));


// router.use('/', index.routes(), index.allowedMethods());
// router.use('/create', create.routes(), create.allowedMethods());
// router.use('/users', users.routes(), users.allowedMethods());
// app.use(router.routes(), router.allowedMethods());
mountRouter.mount('/', index.router);
mountRouter.mount('/users', users.router);
app.use(mountRouter.routes());


// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;