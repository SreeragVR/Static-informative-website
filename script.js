
// active menu


const header = document.getElementById("activeDIvClass");
const btns = header.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }  
    this.className += " active";
  });
}



// owl carousel


$('.owl-carousel').owlCarousel({
  margin:10,
  loop:true,
  autoWidth:true,
  items:4,
  nav:true,
  responsive:{
    0:{
      items:1,
      autoWidth:false
    },
    576:{
      items:2
    },
    768:{
      items:3
    }
  },
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true

})


// vertical slider

const swiper = new Swiper('.swiper', {

  direction: 'vertical',
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button',
  },

});