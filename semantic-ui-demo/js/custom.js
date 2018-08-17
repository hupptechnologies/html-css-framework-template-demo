$(document).ready(function(){
    $(".mobile_menu_main .menu_btn").click(function(){
        $("body").toggleClass("menu_open");
    });
});

$(document).ready(function(){
    $(".mobile_menu_main .menu_btn").click(function(){
        $(".mobile_menu_main .mobile_menu").toggle();
    });
});

$(function() {
      $('.carousel').owlCarousel({
         autoplay:true,
         navigation: true,
         loop:true,
         nav:true,
         items:3,      //temps entre chaque slide
         itemsDesktop : [1199,3],
        itemsDesktopSmall  : [979,2],
        itemsTablet: [767, 1],
         smartSpeed: 500,           //speed de transition entre les slide
         navigationText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
   });
    
});
