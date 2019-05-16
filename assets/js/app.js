$(function() {
  
  // 鳥アイコンがクリックされたら
  $('.bird').click(function() {
    // ページのトップに戻る
    $('html').animate({scrollTop: 0}, 1000);
  })



  // 画面がスクロールされたら
  $(window).scroll(function() {

    // スクロールの量を取得
    let scrollTopValue = $(document).scrollTop();

    if (scrollTopValue > 500) {
      // スクロールの量が500を超えたら
      // 鳥アイコンを表示
      $('.bird').fadeIn();
    } else {
      // スクロールの量が500を超えていない場合
      // 鳥アイコンを非表示
      $('.bird').fadeOut();
    }


    // htmlの処理
    // htmlの表示位置（上）の取得
    let htmlTop = $('.html').offset().top;

    if (scrollTopValue > htmlTop - 150) {
      // htmlが表示されそうになったら
      $('.html').animate({left: 0}, 1000);
    }

    // cssの処理
    // cssの表示位置（上）の取得
    let cssTop = $('.css').offset().top;

    if (scrollTopValue > cssTop - 150) {
      // cssが表示されそうになったら
      $('.css').animate({right: 0}, 1000);
    }


    // jsの処理
    let jsTop = $('.js').offset().top;

    if (scrollTopValue > jsTop) {
      $('.js .section-content').fadeIn();
    } else {
      $('.js .section-content').fadeOut();
    }
  })

})