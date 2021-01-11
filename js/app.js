
/* Менюшка */
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });
});


/* Каруселька №1 */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



/* Меню аккардион №3 */

$(document).ready(function() {
    $('.accordion__header').click(function() {

        $(".accordion__body").not($(this).next()).slideUp(400);
        $(this).next().slideToggle(400);

        $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
        $(this).closest(".accordion__item").toggleClass("open-accordion");
    });
});



