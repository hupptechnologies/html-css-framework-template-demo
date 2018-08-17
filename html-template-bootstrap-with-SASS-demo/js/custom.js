$(document).ready(function(){
    $(".mobile_menu .menu_btn").click(function(){
        $("body").toggleClass("menu_open");
    });
});

$(function() {
      $('#owl-demo').owlCarousel({
        loop:true,
        autoplay:false,
        singleItem:true,
        navigation: true,
        nav:true,
        itemsDesktop : [1199,1],
        itemsDesktopSmall  : [979,1],
        itemsTablet: [768, 1],
        items:1,      //temps entre chaque slide
        smartSpeed: 500,           //speed de transition entre les slide
        navigationText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
         
   });
});
$(document).ready(function(){
    $(".mobile_menu .menu_btn").click(function(){
        $(".mobile_menu .mb_menu_main").toggle();
    });
});

