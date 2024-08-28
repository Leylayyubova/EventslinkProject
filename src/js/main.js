document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            480: {
                slidesPerView: 2,
            },
        }
    });
});