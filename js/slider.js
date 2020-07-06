const sliderOptions = {
    pager: false,
    controls: false
  }
  
  const slider = $(".products").bxSlider(sliderOptions);

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