$("#switch").click(function() {
    $('.login-text').toggleClass('hide');
    $('.signup-text').toggleClass('hide');
    $('.body').toggleClass('switch-bg');
    $(".login").removeClass("login-animation-back");
    $(".signup").removeClass("signup-animation-back");
    $(".login").toggleClass("login-animation");
    $(".signup").toggleClass("signup-animation");

    setTimeout(function() {
      $('.signup').toggleClass('back');
    }, 600);
  });

  $("#switch2").click(function() {
    $('.login-text').toggleClass('hide');
    $('.signup-text').toggleClass('hide');
    $('.body').toggleClass('switch-bg');
    $(".login").removeClass("login-animation");
    $(".signup").removeClass("signup-animation");
    $(".login").toggleClass("login-animation-back");
    $(".signup").toggleClass("signup-animation-back");
    
    setTimeout(function() {
      $('.signup').toggleClass('back');
    }, 600);
  });