const Router = require('koa-66');
const router = new Router();
// router.get('/home', (ctx, next) => {
//   return next().then(() => {
//     console.log(ctx);
//     console.log(ctx.req);
//     ctx.body = 'Router Hello World!';
//   });
// });

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };
  await ctx.render('index', {
  });
})

module.exports.router = router
// router.get('/views/:id', (ctx,next) => {
//   return next().then(() => {
//     console.log(ctx.params);
//     ctx.body = 'views';
//   });
// });
// router.get('/about', (ctx, next) => {
//   return next().then(() => {
//     ctx.body = 'about';
//   });
// });
// module.exports.router = router;