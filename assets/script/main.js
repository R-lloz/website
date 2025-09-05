'use strict';

$(document).ready(function () {
    // メニューボタン
    // リサイズ時のメニュー表示制御
    let w = window.innerWidth;
	$(window).on('resize', function (e) {
        if(w == window.innerWidth) return;
        if(w >= 768 && window.innerWidth < 768)  $('#js-drawer').hide();
        w = window.innerWidth;
        if(w >= 768) $('#js-drawer').show();
	});
	$('#js-menu-btn').on('click', function (e) {
		e.preventDefault();
		$('#js-drawer').slideToggle();
	});
	$(document).on('click', function (e) {
		if(!$(e.target).closest('#js-drawer, .header__menu-btn').length) {
			if($('#js-drawer').is(':visible') && w < 768) $('#js-drawer').slideToggle();
		}
	});
	$('#js-drawer a').on('click', function () {
		$('#js-drawer').slideToggle();
	});


    // 価格・スペックページ
    // カルーセル


	// よくあるご質問
	// FAQ表示切り替え
});