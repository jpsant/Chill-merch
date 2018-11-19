AOS.init({
    duration: 1300,
    once: true
});


$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        var $bar = $(".bar");
        var $brand = $(".navbar-brand");
        var $item = $(".nav-item");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $bar.toggleClass('black', $(this).scrollTop() > $nav.height());
        $brand.toggleClass('black', $(this).scrollTop() > $nav.height());
        $item.toggleClass('black', $(this).scrollTop() > $nav.height());
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

