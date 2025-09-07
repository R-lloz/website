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
	// アイコンクリック
	$('#js-menu-btn').on('click', function (e) {
		e.preventDefault();
		if($('#js-drawer').is(':visible')){
			$('#js-drawer').fadeOut();
		}else{
			$('#js-drawer').fadeIn();
		}
	});
	// メニュー外の要素がクリックされた場合閉じる
	$(document).on('click', function (e) {
		if(!$(e.target).closest('#js-drawer, .header__menu-btn').length) {
			if($('#js-drawer').is(':visible') && w < 768) $('#js-drawer').fadeOut();
		}
	});


    // 価格・スペックページ
    // カルーセル
    const swiper = new Swiper('.swiper', {
        loop: false,
        initialSlide: 0,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 13,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

	// よくあるご質問
	// FAQ表示切り替え
    $('.faq__item').on('click', function (e) {
        $('.faq__answer', this).slideToggle();
        $(this).toggleClass('faq__item--close');
	});

});