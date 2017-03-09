const Router = require('koa-66');
const router = new Router();
const DMHtml = require('../controllers/htmlController');

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };
  await ctx.render('index', {
  });
})

router.post('/create', DMHtml.Create())
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

module.exports.router = router
