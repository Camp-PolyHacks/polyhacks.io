$(() => {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  setInterval(() => {
    $('.carousel').carousel('next');
  }, 3000);
});