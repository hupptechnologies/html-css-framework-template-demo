

$(document).ready(function(){
$('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    var animationDelay = 2500,
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000,
        lettersDelay = 50,
        typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        revealDuration = 600,
        revealAnimationDelay = 1500;

     $('.button-collapse').sideNav({
        menuWidth: 240,
        edge: 'left',
        closeOnClick: true
      });
     jQuery.noConflict();        
});

$(window).scroll(function(){
  var sticky = $('.navbar-fixed'),
      scroll = $(window).scrollTop();

  if (scroll >= 10) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

if(window.matchMedia('(max-width: 992px)').matches) {
    $( ".home_left" ).insertAfter( ".home_right" );
}

$(document).ready(function(){
  $('.screenshot_slider').slick({
    dots: true,
    speed: 1500,
    infinite: false,
    arrows: false,
    draggable: false,
  });
});
$(document).ready(function(){
$('.client_slider').slick({
  centerMode: true,
  centerPadding: '31%',
  slidesToShow: 1,
  speed: 1000,
  arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '21%',
        slidesToShow: 1,
        dots: true,
      }
    },
    {
        breakpoint: 768,
        settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
        dots: true,
      }
    },
    ]
  });
});

// var overlay = document.getElementById('video-overlay');
// var video = document.getElementById('video');
// var videoPlaying = false;
// overlay.onclick = function() {
//     if (videoPlaying) {
//         video.pause();
//         videoPlaying = false;
//     }
//     else {
//         video.play();
//         videoPlaying = true;
//     }
// }

var video = document.getElementById("video-overlay"); 
var video = document.getElementById('video');
video.addEventListener("ended", function(){
    console.log('video completed');
    //display banner on video ending
    $("#video-overlay").removeClass("active");
    video.load(); 
}); 
$("#video-overlay").click(function(e){
    if(video.paused==true){
        console.log('video paused');
        
            $("#video-overlay").addClass("active");
       
        video.play();
    }else{
        //hide banner
        console.log('video played');
        $("#video-overlay").removeClass("active");
        video.pause();
    }
});


$(function(){
$('#currentTime').html($('#Video').find('video').get(0).load());
$('#currentTime').html($('#video_container').find('video').get(0));
})
setInterval(function(){
$('#currentTime').html($('#Video').find('video').get(0).currentTime);
$('#totalTime').html($('#Video').find('video').get(0).duration);    
},500)

