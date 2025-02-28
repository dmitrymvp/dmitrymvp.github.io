
let swiper = null;

function addSwiper() {
    
    const currentInnerWidth = window.innerWidth;

    if (currentInnerWidth < 768) {

        if (!swiper) {
            const swiperElement = document.querySelector('.swiper');

            const observer = new ResizeObserver(() => {
                const widthSwiper = swiperElement.offsetWidth;
                if (swiper) {
                    swiper.params.slidesPerView = widthSwiper / 267;
                    swiper.update();
                }
            });

            observer.observe(swiperElement);

            swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                slidesPerView: 1,
            });
        }
        
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }
}

window.addEventListener('resize', addSwiper);
window.addEventListener('load', addSwiper);

let brandsMoreElement = document.querySelector('#brands__more');
let containerElement = document.querySelector('.container');
let moreElement = document.querySelector('.more');


brandsMoreElement.addEventListener('click', function () {
    containerElement.classList.toggle('container--open');
    moreElement.classList.toggle('more--active');
    if (containerElement.classList.contains('container--open')) {
        brandsMoreElement.textContent = 'Скрыть';
    } else {
        brandsMoreElement.textContent = 'Показать все';
    }
});