$(window).scroll(function () {
	//スクロール量に応じての処理
});

$(function () {
	$(window).scroll(function () {
		$("#pos").text($(this.scrollTop());
	});
});

$(function () {
	//ファーストビューでは＃bttを表示する必要がないため、いったん消しておく
	$("#btt").hide();
});
//スクロール量が７００ｐｘを超えたら
if ($(this).scroll() > 700{
	//#bttをフェードインする
	$("#btt").fadeIn();
	//スクロール量が７００ｐｘ以内だったら
} else {
	//#bttをフェードアウトする
	$("#btt").fadeOut();
}
