"use strict";

const swiper = new Swiper('#slider', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

// Showing popup
function showInfoEvent(sliderID) {
    if (!sliderID) {
        return;
    }
    const infoButtons = document.querySelectorAll(`#${sliderID} .button-info`);
    infoButtons.forEach((button) => {
        button.addEventListener('click', () => {
            document.getElementById(sliderID).classList.add('info-state');
        });
    });
}
showInfoEvent('slider');
