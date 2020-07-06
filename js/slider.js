const sliderOptions = {
    pager: false,
    controls: false
  }
  
  const slider = $(".products").bxSlider(sliderOptions);
  jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ){
      if ( ns.includes("noPreventDefault") ) {
        this.addEventListener("touchstart", handle, { passive: false });
      } else {
        this.addEventListener("touchstart", handle, { passive: true });
      }
    }
  };
  $('.products-slider__btn--next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
    console.log("next");
  });
  
  $('.products-slider__btn--prev').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
    console.log("prev");
  })