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
    let winScroll = $(window).scrollTop();
    let winHeight = $(window).height();
    let scrollPosition = winScroll + winHeight;
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