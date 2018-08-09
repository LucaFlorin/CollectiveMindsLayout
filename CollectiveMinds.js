$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 250) {
            $(".sector1").addClass("active");
        } else {
           $(".sector1").removeClass("active");
        }

        if($(window).scrollTop() > 250) {
            $('.header_list').addClass('scroll_header');
        }
        else{
            $('.header_list').removeClass('scroll_header');
        }


        if($(window).scrollTop() > 250) {
            $('.logo').addClass('scroll_header');
        }
        else{
            $('.logo').removeClass('scroll_header');
        }


        

        if($(window).scrollTop() > 250) {
            $('.socials_list').addClass('scroll_header');
        }
        else{
            $('.socials_list').removeClass('scroll_header');
        }


        if($(window).scrollTop() > 250) {
            $('.header_socials').addClass('header_socials_scroll');
        }
        else{
            $('.header_socials').removeClass('header_socials_scroll');
        }

    });




    $('.side_menu_icon').click(function(){
        $('.line1').toggleClass('line1_click');
        $('.line2').toggleClass('line2_click');
        $('.side_menu_content').toggleClass('side_menu_content_show')
    });


    $('a').click(function(){
        $('.side_menu_content').removeClass('side_menu_content_show');
        $('.line1').removeClass('line1_click');
         $('.line1').removeClass('line2_click');
    });




    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});