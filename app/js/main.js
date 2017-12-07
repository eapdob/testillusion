$(function() {
    var header = $(".header");
    var headerHeight = 89;
    var topPos = 200;

    // hide and show search form
    $(".header__search a").on("click", function(event) {
        event.preventDefault();
        $(".header__bottom").stop().slideToggle();
    });

    // arrow up from bottom right side
    $(window).scroll(function() {
        // fixed header
        if ($(this).scrollTop() > 0 && !header.hasClass("fixed")) {
            header.addClass("fixed");
        }
        if ($(this).scrollTop() <= headerHeight && header.hasClass("fixed")) {
            header.removeClass("fixed");
        }

        // top btn
        if ($(this).scrollTop() > topPos) $(".topBtn").fadeIn("slow");
        else $(".topBtn").fadeOut("slow");
    });
    $(".topBtn").on("click", function() {
        $("body, html").animate({
            scrollTop: 0
        }, 1000);
    });

    // var mixer = mixitup($("#grid"), {
    //     selectors: {
    //         target: '.content__item'
    //     },
    //     callbacks: {
    //         onMixEnd: function(state){
    //             masonryGrid();
    //         }
    //     }
    // });
    //
    // function masonryGrid(){
    //     // initialize
    //     container.masonry({
    //         itemSelector: '.content__item',
    //         columnWidth: '.content__item',
    //         isAnimated: true
    //     });
    //     container.masonry('reloadItems');
    //     container.masonry('layout');
    // }
});

$(window).on("load", function () {
    // masonry gallery
    var container = $(".content__collection");
    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: ".content__item",
            columnWidth: ".content__item"
        });
    });
});