define(["text!./user.html","css!./css/user.css"], function(userPage){
	return {
		init : function(){
			$("#user").html(userPage).show().siblings("div").hide();
		}
	}
});