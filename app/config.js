const dm-html-config = {
	goods : {
		img : 'dmtmp="ctl:data;field:pic;title:pic_{{key}};index:{{key}}"',
		name : 'dmtmp="ctl:data;field:ptitle;title:ptitle_{{key}};maxsize:20;index:{{key}}"',
		href : 'dmtmp="ctl:data;field:purl;title:purl_{{key}};index:{{key}}"',
		original : 'dmtmp="ctl:data;field:price;title:price_{{key}};index:{{key}};isedit:true;"',
		price : 'dmtmp="ctl:data;field:nprice;title:nprice-_{{key}};index:{{key}};isedit:true;"'
	},
	comment : {
		user : 'dmtmp="ctl:data;field:pnick;title:pnick_{{key}}_1;maxsize:20;index:{{key}}"',
		content : 'dmtmp="ctl:data;field:pevaluate;title:pevaluate_{{key}};maxsize:40;index:{{key}}"'
	}
}