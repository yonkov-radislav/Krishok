$(document).ready(function () {

    //Slider

    $('.slider').bxSlider({
        mode:'horizontal',
        speed: '1000'
    });

    //Scroll
    var $scrollBtn = $('#scroll-to-top-btn');
    var $window   = $(window);

    $window.scroll(function () {
        var scrollPosition = $window.scrollTop();
        if(scrollPosition > 600){
            $scrollBtn.show();
        } else {
            $scrollBtn.hide();
        }
    });

    $scrollBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    /* Toggle */
    $('#menu-toggle').click(function() {
        $('#main-menu').toggle();
    });

    /* FAQ hide answer*/








    $('.show-answer').click(function() {
        $('#content-faq .answer').toggle();
    });
        /*
        $('.show-answer').click(function() {
            $('#content-faq .answer').attr('style',"display:block");
        });
        */






});