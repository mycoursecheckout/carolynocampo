$(document).ready(function () {
    var owl = $('.slides');
    owl.owlCarousel({
        loop: true,
        dots: false,
        items: 1,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mobile_nav").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mobile_nav").style.marginLeft = "0";
    }

    $.ajax({
        url: "includes/header.inc.html", success: function (result) {
            $("#content-head").html(result);
        }
    });


})

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.header').addClass("sticky");
    }
    else {
        $('.header').removeClass("sticky");
    }
});

