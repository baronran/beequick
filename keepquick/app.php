<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wxd9932253647e8d68", "9b0c934b440af76f726c8dba6509a533");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html style="font-size: 13px">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="apple-touch-icon-precomposed" href="/static/bee/img/app_icon-bae075e7.png">
<title>爱鲜蜂</title>
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
<meta name="description" content="各种新鲜，闪电送！鲜蜂侠急送,1小时内送货上门,下单后鲜蜂侠火速送上冰饮零食、卤味夜宵~OTO领域的创新企业，专注于社区服务的最后1公里">
<meta name="keywords" content="爱鲜蜂,社区O2O,网上外卖,订外卖">
<script>
	(function(){
		var calc = function(){
			var docElement = document.documentElement;
			var clientWidthValue = docElement.clientWidth > 480 ? 480 : docElement.clientWidth;
			docElement.style.fontSize = 10*(clientWidthValue/320) + 'px';
		}
		calc();
		window.addEventListener('resize',calc);
	})();
</script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript"></script>
<script data-main = "js/app.js" type="text/javascript" src = "js/require.js"></script>
<link rel="stylesheet" type="text/css" href="css/swiper.min.css">
<link href="css/main.css" rel="stylesheet">
<!-- <script src="js/jquery-1.11.0.js"></script>
<script src="js/swiper.min.js"></script>
<script src="js/main.js"></script> -->
</head>
<body>
	<div class="require">
		<div id="index"></div>
		<div id="buy"></div>
		<div id="cart"></div>
		<div id="user"></div>
	</div>
    <!-- 清浮动 -->
	<div class="clearfixed"></div>
	<!-- foot -->
	<div class="foottop"></div>
	<footer class="footer">
		<div class="footlist">
			<ul class="foot-nav" id="requireFoot">
				<li class="foot-nav1" href="#index"> 
					<a href="#index">首页</a>
				</li>
				<li class="foot-nav2" >
				<a href="#buy">闪送超市</a>
				</li >
				<li class="foot-nav3">
					<a href="#cart">购物车</a>
				</li>
				<li class="foot-nav4">
					<a href="#user">我的</a>
				</li>
			</ul>
		</div>
	</footer>
	<script type="text/javascript">
		 wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
wx.ready(function () {
    // 在这里调用 API
    wx.getLocation({
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    },
    cancel: function (res) {
        alert('用户拒绝授权获取地理位置');
    }
    });
});
</script>
</body>
</html>