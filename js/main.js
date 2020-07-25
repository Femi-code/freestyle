var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){

/* sticky navigation*/ 
$('.section-1').waypoint(function(direction){
  if(direction=="down"){
    $('nav').addClass('sticky');
  }else{
    $('nav').removeClass('sticky');
  }
});

/* mobile-nav*/
$('.mobile-nav-icon').click(function(){
   var nav = $('.main-nav');
   var icon = $('.mobile-nav-icon i');

   nav.slideToggle(500);
   if(icon.hasClass('fa-bars')){
       icon.addClass('fa-times')
       icon.removeClass('fa-bars')
   }else{
       icon.addClass('fa-bars')
       icon.removeClass('fa-times')
   }
});

});
