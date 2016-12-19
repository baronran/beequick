/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-15 15:47:52
 * @version $Id$
 */
// require.config({
// 	// "./"：代表目前所在的目录  "../"：代表上一层目录  以"/"开头：代表根目录
// 	paths: {
// 		//参数可使用数据 加载优先级按下标从小到大顺序
// 		"jquery": ["js/jquery-1.11.2", "js/jquery-1.8.1.js"],
// 		"text": "js/text",
// 		"backbone": "js/backbone",
// 		"underscore": "js/underscore",
// 		"$css": "js/css"
// 	}
// 	//使用baseUrl设置默认路径
// 	// baseUrl : "js"
// });
require.config({
	paths:{
		//js文件省略掉文件类型
		"":"index",
		"jquery":["./jquery-1.11.0","./jquery-1.11.2"],
		"backbone":"./backbone",
		"underscore": "./underscore",
		"text":"./text",
		"css":"./css",
		"swiper":"./swiper.min",
		"baidu":"./baiduTemplate"
	}
});
/*-------------------------------------加载事件-------------------------------------*/
// require(["jquery"],function ($) {
// 	//默认显示首页
// 	//$("#index").html(indexPage);
// 	$("#requireFoot").on("click",'li',function(){
// 		var num = $(this).index();
// 		switch(num) {
// 			case 0:
// 				require(["/keepquick/modules/index/index.js"],function(index){
// 					index.init();
// 				});
// 				break;
// 			case 1:
// 				require(["/keepquick/modules/buy/buy.js"],function(buy){
// 					buy.init();
// 				});
// 				break;
// 			case 2:
// 				require(["/keepquick/modules/cart/cart.js"],function(cart){
// 					cart.init();
// 				});
// 				break;
// 			case 3:
// 				require(["/keepquick/modules/user/user.js"],function(user){
// 					user.init();
// 				});
// 				break;
// 				default:
// 				break;
// 		}
// 	});
// });
/*----------------------使用backbone 路由---------------------------------*/
require(["jquery", "backbone", "router","swiper","baidu"], function($, Backbone, router){
	Backbone.history.start();
});
// require(['jquery','backbone','router.js'],function($,Backbone){
//     Backbone.history.start();
// });
// document.onclick = function () {
// 	require(["./a.js","./b.js"],function () {
// 	});
// }
// require(["jquery", "text!tmp/home.html", "text!tmp/market.html", "text!tmp/order.html", "text!tmp/mine.html"], function($, homePage, marketPage, orderPage, minePage){
// 	//默认显示首页
// 	$(".mainContent").html(homePage);
// 	绑定底部菜单事件
// 	$(".footer li").on("click", function(){
// 		var index = $(this).index() + "";
// 		switch(index){
// 			case "0":
// 				$(".home").html(homePage);
// 				break;
// 			case "1":
// 				$(".market").html(marketPage);
// 				break;
// 			case "2":
// 				$(".order").html(orderPage);
// 				break;
// 			case "3":
// 				$(".mine").html(minePage);
// 				break;
// 			default:
// 				break;
// 		}
// 	});

// 	//使用requirejs动态加载不同模块
// 	$(".footer li").on("click", function(){
// 		var index = $(this).index() + "";
// 		switch(index){
// 			case "0":
// 				require(["modules/home/home.js"]);
// 				break;
// 			case "1":
// 				$(".mainContent").html(marketPage);
// 				break;
// 			case "2":
// 				$(".mainContent").html(orderPage);
// 				break;
// 			case "3":
// 				$(".mainContent").html(minePage);
// 				break;
// 			default:
// 				break;
// 		}
// 	});

// });



//依赖顺序控制，按照下标从小到大加载
// require(["b.js", "a.js"], function(){

// });



//线上参考demo地址
//http://www.runoob.com/w3cnote/requirejs-tutorial-1.html
//http://www.runoob.com/w3cnote/requirejs-tutorial-2.html
