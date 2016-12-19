/**
 * 
 * @authors AnRan
 * @date    2016-12-12 09:54:05
 * @version 1.0
 */
$(document).ready(function () {
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		speed:500,
		autoplayDisableOnInteraction : false,
		loop : true,
		freeMode : false,
		pagination : '.swiper-pagination',
	})
})