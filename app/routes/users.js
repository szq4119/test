const Router = require('koa-66');
const router = new Router();

router.get('/', async function (ctx, next) {
  ctx.body = 'this a users response!';
})

module.exports.router = router
