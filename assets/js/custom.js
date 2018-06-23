(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function(){
    $('.btn-anchor').click(function(){
		$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top}, 750);
		return false;
	});
    $('.dropdown').hover(function(){
        $('.dropdown-toggle', this).trigger('click');
    });
});

var Sticky = new hcSticky('.sidebar', {
    stickTo: '.content',
    innerTop: -80,
    queries: {
        980: {
            disable: true
        }
    }
});

//var infScroll = new InfiniteScroll( ".row", {
//		path: function() {
//			// 頁面路徑
//			if ( this.loadCount < 2 ) {
//				// 只讀取前兩頁資料
//				var nextIndex = this.loadCount + 2; // 2
//				return "article-list" + nextIndex + ".html"; // page2.html
//			}
//		},
//		append: ".post", // 匯入物件類別
//		status: ".scroller-status" // 捲軸狀態類別
//})
