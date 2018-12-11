$("#switch").click(function() {
    $('.login-text').toggleClass('hide');
    $('.signup-text').toggleClass('hide');
    $('.body').toggleClass('switch-bg');
    $('.login').toggleClass('login-animation');
    $('.signup').toggleClass('signup-animation');
    setTimeout(function() {
      $('.signup').toggleClass('back');
    }, 600);
  });

  $("#switch2").click(function() {
    $('.login-text').toggleClass('hide');
    $('.signup-text').toggleClass('hide');
    $('.body').toggleClass('switch-bg');
    $('.login').removeClass('login-animation');
    $('.signup').removeClass('signup-animation');
    setTimeout(function() {
      $('.signup').toggleClass('back');
    }, 600);
  });