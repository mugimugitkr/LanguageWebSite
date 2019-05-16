$(function() {

  $('.bird').click(function() {
    $('html').animate({scrollTop: 0}, 500)
  })

  $('.section-content').click(function() {
    $('body').append($('<div id="over">'));
    $('#over').append('<div class="lightbox">');
    let icon = $(this).find('i').clone();
    $('.lightbox').append(icon);

    $('#over').click(function() {
      $('#over').fadeOut('slow', function() {
        $('#over').remove();
      })
    });

    $('.lightbox').click(function(event){
      event.stopPropagation();
    });
  })

  $(window).scroll(function() {
    let scrollTop = $(document).scrollTop();

    if (scrollTop > 500) {
      $('.bird').fadeIn();
    } else {
      $('.bird').fadeOut();
    }

    // html
    let htmlTop = $('.html').offset().top;

    if (scrollTop > htmlTop - 150) {
      $('.html').animate({left: 0}, 500)
    }

    // css
    let cssTop = $('.css').offset().top;

    if (scrollTop > cssTop - 150) {
      $('.css').animate({right: 0}, 500)
    }

    // js
    let jsTop = $('.js').offset().top;
    if (scrollTop > jsTop - 150) {
      $('.js .section-content').fadeIn()
    } else {
      $('.js .section-content').fadeOut()
    }
    
  })

})