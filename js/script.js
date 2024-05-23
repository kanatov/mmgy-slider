"use strict";

// Swiper slider
const slider = new Swiper('#slider', {
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

// Showing info popup
function infoState(sliderID) {
    if (!sliderID) {
        console.error('No slider ID provided');
        return;
    }

    const infoButtons = document.querySelectorAll(`#${sliderID} .button-info`);
    if (!infoButtons.length) {
        console.error('No info buttons found');
        return;
    }
    infoButtons.forEach((button) => {
        button.addEventListener('click', () => {
            document.getElementById(sliderID).classList.add('info-state');
        });
    });
}
infoState('slider');

// Control video with custom buttons and sliders events
function setPlayerControls(videoWrapper, slider) {
    const video = videoWrapper.querySelector('video');
    const btnPlay = videoWrapper.querySelector('.play');
    const btnPause = videoWrapper.querySelector('.pause');

    const playbackCallback = () => {
        if (video.paused) {
            video.play();
            videoWrapper.classList.remove('paused');
            videoWrapper.classList.add('playback');
        } else {
            video.pause();
            videoWrapper.classList.remove('playback');
            videoWrapper.classList.add('paused');
        }
    };
    btnPlay.addEventListener('click', playbackCallback);
    btnPause.addEventListener('click', playbackCallback);

    slider.on('slideChange', () => {
        video.pause();
        videoWrapper.classList.remove('disable-input');
        videoWrapper.classList.remove('playback');
        videoWrapper.classList.remove('paused');
    });
}

function controlVideo(sliders) {
    if (!sliders || !sliders.length) {
        console.error('No sliders provided');
        return;
    }

    sliders.forEach((slider) => {
        const sliderElement = document.querySelector(slider.id);
        if (!sliderElement) {
            console.error(`Slider element not found for ID: ${slider.id}`);
            return;
        }

        const videoPlayers = sliderElement.querySelectorAll('.video-player');
        videoPlayers.forEach((videoWrapper) => setPlayerControls(videoWrapper, slider.instance));
    });
}

controlVideo([{ id: '#slider', instance: slider }]);