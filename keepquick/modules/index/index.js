define(["text!./index.html", "css!./css/main.css"], function(indexPage) {
	return {
		init: function() {
			$("#index").html(indexPage).show().siblings("div").hide();
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000, //可选选项，自动滑动
				speed: 500,
				autoplayDisableOnInteraction: false,
				loop: true,
				freeMode: false,
				pagination: '.swiper-pagination',
			})
			//ajax
		}

	}
});