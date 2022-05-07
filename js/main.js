$(function () {
  $(".header-slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icon/prev.svg" alt="previous"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icon/next.svg" alt="next"></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 361,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $(".product__name").slick({
    asNavFor: ".product__content",
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    centerMode: true,
    prevArrow:
      '<button type="button" class="product-prev"><img src="images/icon/product_prev.svg" alt="previous"></button>',
    nextArrow:
      '<button type="button" class="product-next"><img src="images/icon/product_next.svg" alt="next"></button>',
    responsive: [
      {
        breakpoint: 891,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 3,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 471,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  });
  $(".product__content").slick({
    asNavFor: ".product__name",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
