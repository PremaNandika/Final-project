$(window).on("scroll",function() {
  if ($(window).scrollTop()) {
    // $('nav').addClass('black').fadeIn('slow');
    $('nav').css({
      'background' : 'rgba(0, 0, 0, 0.6)',
      'transition' : 'all ease-out .5s'
    });
  }
  else {
    // $('nav').removeClass('black');
    $('nav').css({
      'background' : 'linear-gradient(30deg,rgba(0,0,0,0.3) 0%, rgba(153,151,151,0.3) 100%)',
      'transition' : 'all ease-out .5s'
    })
  }
})
$('.carousel').carousel({
  interval: 2000
})
