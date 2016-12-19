define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			"":"index",
			index: "index",
			buy: "buy",
			cart: "cart",
			user: "user"
		},
		index: function(){
			require(["/keepquick/modules/index/index.js"],function(index){
				index.init();
				//index.pic();
			});
		},
		buy: function(){
			require(["/keepquick/modules/buy/buy.js"],function(buy){
				buy.init();
			});
		},
		cart: function(){
			require(["/keepquick/modules/cart/cart.js"],function(cart){
				cart.init();
			});
		},
		user: function(){
			require(["/keepquick/modules/user/user.js"],function(user){
				user.init();
			});
		},
	});
	return new Router();
});