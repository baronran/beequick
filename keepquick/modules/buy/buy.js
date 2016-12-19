define(["text!./buy.html","css!./css/buy.css"], function(buyPage){
	return {
		init : function(){
			$("#buy").html(buyPage).show().siblings("div").hide();
		}
	}
});
