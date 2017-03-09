
DMHtml.create = async function (ctx, next) {
	const ctxbody = ctx.request.body;
	let number = ctxbody.number || 6;
	let img = ctxbody.img || 0;
	let margin = ctxbody.margin || 0;

  	await ctx.render('create', {

  	});
}
module.exports = DMHtml;