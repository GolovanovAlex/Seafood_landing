$(function () {
  $(".header-slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icon/prev.svg" alt="previous"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icon/next.svg" alt="next"></button>',
    vertical: true,
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
  });
  $(".product__content").slick({
    asNavFor: ".product__name",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  });
});
