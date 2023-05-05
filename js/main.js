$(document).ready(function () {

    // burger-menu --------------------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
    });

    // subnenu slide
    $(window).on('resize', function () {
        console.log('resize');
        if ($(window).width() < 992) {
            submenuSlide();
        } else {
            $('.menu-item-has-children').off('click');
            $('.sub-menu').slideDown();
        }
    });

    if ($(window).width() < 992) {
        submenuSlide();
    }

    function submenuSlide() {
        $('.menu-item-has-children').off('click').on('click', function (e) {
            e.preventDefault();
            $('.sub-menu').slideToggle();
        });
    }

    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.welcomesect__textblock, .testimonials').css('padding-left', paddingContainer);


    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.welcomesect__textblock, .testimonials').css('padding-left', paddingContainer);
    });

    // TESTIMONIALS SLIDER
    if($('.testimonials-sl').length) {
        $('.testimonials-sl').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1.5,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
   

    // tabs
    $('.resoursesesct__header ul li a').click(function (e) {
        e.preventDefault();
    });

    var $tabs = $('.resoursesesct__header a');
    var $tabContents = $('.resourses-container');

    $tabs.on('click', function (e) {
        e.preventDefault();

        var target = $(this).data('target');
        var $targetContent = target === 'all' ? $tabContents : $tabContents.eq(target);

        $tabs.removeClass('active');
        $(this).addClass('active');

        $tabContents.hide();
        $targetContent.show();
    });

    $tabs.eq(0).trigger('click');


    // faq
    $('.faqbox__header').click(function(){
        $(this).next('.faqbox__body').slideToggle();
        $(this).toggleClass('rotate');
    });

    // testimonialpage slider
    if($('.ttmslider').length) {
        $('.ttmslider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            // autoplaySpeed: 4000,
            // arrows: true,
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    }
    

});