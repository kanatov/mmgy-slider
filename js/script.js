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


// Controlling video playback and enables dragging
class VideoController {
    constructor(sliders) {
        this.sliders = sliders;
        this.currentWrapper = null;
        this.startX = undefined;
        this.startY = undefined;
        this.controlVideo();
    }

    mouseUpCallback = (event) => {
        const delta = 6;
        const video = this.currentWrapper.querySelector('video');
        const diffX = Math.abs(event.pageX - this.startX);
        const diffY = Math.abs(event.pageY - this.startY);

        if (diffX < delta && diffY < delta) {
            this.playbackToggle(this.currentWrapper, video);
        }
        this.currentWrapper.classList.remove('disable-input');
        window.removeEventListener('mouseup', this.mouseUpCallback);
    }

    mouseDownCallback(event, videoWrapper) {
        this.startX = event.pageX;
        this.startY = event.pageY;
        this.setCurrentWrapper(videoWrapper);
        window.addEventListener('mouseup', this.mouseUpCallback);
    }

    playbackToggle(videoWrapper, video) {
        if (video.paused) {
            video.play();
            videoWrapper.classList.remove('paused');
            videoWrapper.classList.add('playback');
        } else {
            video.pause();
            videoWrapper.classList.remove('playback');
            videoWrapper.classList.add('paused');
        }
    }

    setCurrentWrapper(videoWrapper) {
        this.currentWrapper = videoWrapper;
        this.currentWrapper.classList.add('disable-input');
    }

    setPlayerControls(videoWrapper, slider) {
        const video = videoWrapper.querySelector('video');
        video.addEventListener('mousedown', (event) => this.mouseDownCallback(event, videoWrapper));

        slider.on('slideChange', () => {
            video.pause();
            videoWrapper.classList.remove('playback');
            videoWrapper.classList.remove('paused');
        });

    }

    controlVideo() {
        if (!this.sliders || !this.sliders.length) {
            console.error('No sliders provided');
            return;
        }

        this.sliders.forEach((slider) => {
            const sliderElement = document.querySelector(slider.id);
            if (!sliderElement) {
                console.error(`Slider element not found for ID: ${slider.id}`);
                return;
            }

            const videoPlayers = sliderElement.querySelectorAll('.video-player');
            videoPlayers.forEach((videoWrapper) => this.setPlayerControls(videoWrapper, slider.instance));
        });
    }
}
const videoController = new VideoController([{ id: '#slider', instance: slider }]);
