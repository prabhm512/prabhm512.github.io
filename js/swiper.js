var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        280: {
        slidesPerView: 2,
        spaceBetween: 0,
        },
        360: {
        slidesPerView: 3,
        spaceBetween: 0,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 0, 
        },
        1024: {
        slidesPerView: 7,
        spaceBetween: 0,
        },
    }
});
