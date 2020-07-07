const sliderOptions = {
    pager: false,
    controls: false
  }
  
  const slider = $(".products").bxSlider(sliderOptions);

  $('.products-slider__btn--next').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
  });
  
  $('.products-slider__btn--prev').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
  })