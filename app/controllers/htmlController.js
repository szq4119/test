import config from '../config';
import template from 'art-template';

const create = async (ctx, next) => {
	const typeary = [750,790,950,990];
 	const ctxbody = ctx.request.body;
	let row = ctxbody.row || 2;
	let img = ctxbody.img || 0;
	let margin = ctxbody.margin || 0;

	let options = new Object();
	options.row = row;
	options.img = img;
	options.margin = margin;
	options.typeary = typeary;
	options.config = config;
	let htmlary = [];
	
	typeary.map(function(val, index) {
		let obj = new Object();
		let html = renderTemplate(val, options);
		obj.html = html;
		obj.size = val;

		htmlary.push(obj);
	})
	
  	await ctx.render('create', {
  		htmlary
  	});
};

const renderHtml = function(size, options){
	let header = renderHeader(size);
	let body = renderBody(size, options);
	let footer = renderFooter(size);
	return header + body + footer;
}

const renderTemplate = function(size, options){
	let body = new Object();
	body.wappersize = size;
	body.bannertype = "";
	
	let itemnumber = 3;
	let indexkey = [1,2,3,4,5,6];
	let itemsize = 0;
	const c = options.config.html_tag;
	if(size > 800){
		itemnumber = 4;
		indexkey = [1,2,3,4,5,6,7,8];
	}
	itemsize = ((size - options.margin * 2) / itemnumber) - (options.margin * 2);
	itemsize = itemsize.toFixed(2);
	let imgsize = options.img == 0 ? 220 : itemsize;
	body.itemsize = itemsize;
	body.imgsize = imgsize;
	body.indexkey = indexkey;
	body.margin = options.margin;
	body.c = c;
	let html = template(__dirname + '/wapper', body);
	return html;
}

const renderHeader = function(size){
	let html = '<table width="' + size + 'px" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto;font-family:Microsoft YaHei;color:#666;"><tr><td>';
	return html;
}
const renderFooter = function(size){
	let html = '</td></tr></table>';
	return html;
}
const renderBody = function(size, options){
	let html = '<div><img src="" width="' + size + 'px" height="" style="width:' + size + 'px;border:0; display:block;"/></div>';
	let gridwapper = '<div style="border-top:0; margin:0; padding:0; width:' + size + 'px; overflow-x: hidden;">';
		gridwapper += '<div class="limittemplate" style="width: ' + size + 'px">';
		gridwapper += renderGrid(size, options);
		gridwapper += '</div><div style="clear:both"></div></div>';
	return html + gridwapper;
}
const renderGrid = function(size, options){
	let itemnumber = 3;
	let itemsize = 0;
	let gridhtml = '';
	const c = options.config.html_tag;
	if(size > 800){
		itemnumber = 4;
	}
	
	itemsize = ((size - options.margin * 2) / itemnumber) - (options.margin * 2);
	let imgsize = options.img == 0 ? 220 : itemsize;

	gridhtml += '<div style="width:' + itemsize + 'px;float: left;text-align:center;margin:' + options.margin + 'px;">' + '<a ' + c.goods.url + 'target="_blank"><img ' + c.goods.img + ' src="img/pic1.jpg" style="width:' + imgsize + 'px;height:' + imgsize + 'px;" width="' + imgsize + 'px" height="' + imgsize + 'px" /></a>' + '</div>'
	return gridhtml;
		//let img = options.img == 0 ? 220 : itemsize;

		// '<div style="width:' + itemsize + 'px;float: left; margin:' + options.margin + 'px;">'
		// 	'<a ' + options.goods.href + 'target="_blank">'
		// 		'<img ' + + ' src="img/pic1.jpg" style="width:' + options.img + 'px;height:' + options.img + 'px;" width="' + options.img + 'px" height="' + options.img + 'px" /></a>'
		// 	<div style="width: 80%;margin: 10px auto 0;">
		// 		<span style="color:#ff5c68; float: left; text-align: right;">
		// 			￥<br/>
		// 			<font style="font-size: 18px">RMB</font>
		// 		</span>
		// 		<span dmtmp="ctl:data;field:nprice;title:nprice-_{{index}};index:{{index}};isedit:true;" style="color:#ff5c68; font-size: 40px; float: left;">
		// 			296
		// 		</span>
		// 		<a dmtmp="ctl:data;field:purl;title:purl_{{index}};index:{{index}}" target="_blank" style="float: right;">
		// 			<img src="https://img.alicdn.com/imgextra/i3/1122449354/TB2wf1kidBopuFjSZPcXXc9EpXa-1122449354.jpg" style="width:32px;height:34px;" width="32px" height="34px"/>
		// 		</a>
		// 	</div>
		// 	<div style="clear:both;"></div>
		// 	<div>
		// 		<span dmtmp="ctl:data;field:pnick;title:pnick_{{index}};maxsize:20;index:{{index}}" style="font-weight: 600"></span>
		// 		<span dmtmp="ctl:data;field:pevaluate;title:pevaluate_{{index}};maxsize:40;index:{{index}}"></span>
		// 	</div>
		// </div>
}
// const header = function(){
// 	'<table width="" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto;font-family:Microsoft YaHei;color:#666;">
// 		<tr>
// 			<td>
// 				<div style="border: 6px solid #ff5c68; border-bottom:0; margin:0; padding:0;">
// 					<img src="https://img.alicdn.com/imgextra/i2/1122449354/TB28giHiohnpuFjSZFpXXcpuXXa-1122449354.jpg" width="734px" height="96px" style="width:734px;height:96px;" border="0"/>
// 				</div>
// 				<div style="border: 6px solid #ff5c68; border-top:0; margin:0; padding:0; width: 738px; overflow-x: hidden;">
// 					<div class="limittemplate" style="width: 748px;">
// 					</div>
// 					<div style="clear:both"></div>
// 				</div>
// 			</td>
// 		</tr>
// 	</table>'
// }

module.exports = create;