$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: false ,
    nextArrow: $('.restaurants-arrow'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
