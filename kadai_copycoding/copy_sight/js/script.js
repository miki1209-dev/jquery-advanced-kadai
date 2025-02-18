$(function () {
  //カルーセル
  $('#carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  //ナビゲーションホバー
  $('.hover').hover(
    function () {
      $(this).animate({opacity: 0.5}, 500);
    },
    function () {
      $(this).animate({opacity: 1}, 500);
    }
  );

  //TOP戻るボタン作成
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('.top-button').fadeIn();
    } else {
      $('.top-button').fadeOut();
    }
  });

  //ナビゲーション スムーズスクロール
  // $('.navAbout').on('click', function() {
  //   $('html, body').animate({scrollTop: $('#about').offset().top}, 500);
  // });

  // $('.navWorks').on('click', function() {
  //   $('html, body').animate({scrollTop: $('#works').offset().top}, 500);
  // });

  $('.navAbout, .navWorks').on('click', function() {
    let getClass = $(this).attr('class');
    let editClass = getClass.replace('hover', '').replace('nav', '').toLowerCase();
    $('html, body').animate({scrollTop: $('#' + editClass.trim()).offset().top}, 500);
  });

  //特定のセクションに到達した時に特定の要素を表示
  $(window).on('scroll', function() {
    addClassScroll($('.about'));
    addClassScroll($('.works'));
  });

  function addClassScroll(target) {
    //スクロールの上下の位置を取得（画面上部から現在の scroll位置を取得）
    //例えば、スクロールして 200px 下に移動したら winScroll = 200 になる。
    let winScroll = $(window).scrollTop();
    //ウィンドウの高さを取得（表示しているウィンドウの高さを取得）
    //例えば、ウィンドウの高さが 800px なら winHeight = 800
    let winHeight = $(window).height();
    //上記の合計(スクロールポジション)（画面上部から現在の scroll位置とブラウザをの高さを足す）
    // 下記は例
    // winScroll = 200
    // winHeight = 800
    // scrollPosition = 200 + 800 = 1000
    // 画面の最上部から 1000px の位置までが見えている
    let scrollPosition = winScroll + winHeight;
    // target.offset().top は target 要素（.about や .works）のページの最上部からの位置
    // 例えば、.about の位置が 800px なら、target.offset().top = 800
    if (target.offset().top < scrollPosition) {
      target.addClass('is-show');
    }
  };

  $('.modal-image').on('click', function() {
    let imgSrc = $(this).attr('src'); // クリックした画像のsrc取得
    console.log(imgSrc);
    $('#modal-img').attr('src', imgSrc); // モーダル内の画像を更新
    $('.modal').fadeIn(); // モーダル表示
  });
  // モーダルを閉じる
  $('.close, .modal').on('click', function() {
      $('.modal').fadeOut();
  });
});