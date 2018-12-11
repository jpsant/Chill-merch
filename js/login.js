$("#switch").click(function() {
    $('.body').toggleClass('switch-bg');
    $('.login').toggleClass('login-animation');
    $('.signup').toggleClass('signup-animation');
    setTimeout(function() {
      $('.signup').toggleClass('back');
    }, 600);
  });