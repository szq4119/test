const html_tag = {
	goods : {
		"img" : 'ctl:data;field:pic;title:pic_',
		"name" : 'ctl:data;field:ptitle;maxsize:20;title:ptitle_',
		"url" : 'ctl:data;field:purl;title:purl_',
		"original" : 'ctl:data;field:price;isedit:true;title:price_',
		"price" : 'ctl:data;field:nprice;isedit:true;title:nprice-_'
	},
	comment : {
		"user" : 'ctl:data;field:pnick;maxsize:20;title:pnick_',
		"content" : 'ctl:data;field:pevaluate;maxsize:40;title:pevaluate_'
	}
}
const api = {

}
module.exports = {
	html_tag,
	api
};