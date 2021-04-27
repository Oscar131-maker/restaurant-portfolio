var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        715: {
          slidesPerView: 2,
        },
        905:{
            slidesPerView: 3,
        }
    }
});