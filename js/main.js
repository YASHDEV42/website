$(function(){


    $('.fa-bars').on('click',function(){

        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30) {
            $('.header').css({'background':'#6c5ce7','box-shadow':'0 .2rem .5rem rgba(0,0,0.4)'})

        }else{
            $('.header').css({'background':'none','box-shadow':'none'})

        }
    })

    //faq acrodden
    $('.accordion-header').on('click',function(){
        $(this).next().slideToggle(500)
        $(this).css('margin-bottom','0')
        $(this).children('span').toggleClass('add-');
        if($('.accordion-header').children('span').hasClass('add-')){

            $(this).children('span').text('-')
        }else{
            $(this).children('span').text('+')

        }
    })
    
})