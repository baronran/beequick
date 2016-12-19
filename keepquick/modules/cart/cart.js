define(["text!./cart.html","css!./css/cart.css"], function(cartPage){
	return {
		init : function(){
			$("#cart").html(cartPage).show().siblings("div").hide();
		}
	}
});
