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

  $('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.header-arrows__left'),
    nextArrow: $('.header-arrows__right'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
