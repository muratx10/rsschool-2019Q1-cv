'use strict';
// @ts-check

const preload = function () {
    document.getElementsByTagName('body')[0].classList.remove('preload');
};

window.onload = preload;

const mainInfo = document.querySelector('.main-info'),
    profilePhoto = document.querySelector('.profile-photo'),
    header = document.querySelector('.header-wrap'),
    summarySection = document.querySelector('.about-section'),
    downloadBtn = document.querySelector('.icon-download'),
    tooltip = document.querySelector('.tooltip'),
    emptyCap = document.querySelector('.empty-cap'),
    h3 = document.querySelector('h3');

const name = '{ Junior Front-End Developer }'.split('');
console.log(name);




window.addEventListener('scroll', function (e) {
    let coordsMain = mainInfo.getBoundingClientRect().top,
        coordsHeader = header.getBoundingClientRect().top,
        heightMainInfo = mainInfo.getBoundingClientRect().height;

    if (coordsMain < -500) {
        mainInfo.classList.add('scroll');
        profilePhoto.classList.add('hide');
        summarySection.classList.add('about-section-after-scroll');
        mainInfo.style.boxShadow = '0 0 10px 5px black';
        emptyCap.style.height = heightMainInfo + 'px';
    } else if (coordsHeader > -500) {
        mainInfo.classList.remove('scroll');
        profilePhoto.classList.remove('hide');
        summarySection.classList.remove('about-section-after-scroll');
        mainInfo.style.boxShadow = 'none';
        emptyCap.style.height = 0;
    }
});

mainInfo.addEventListener('mouseover', (e) => {
    const el = Array.from(e.target.classList).includes('icon-download');
    if (el) {
        tooltip.style.opacity = '1';
        downloadBtn.style.animation = 'none';
        downloadBtn.classList.add('text-pop-up-top');
    } else {
        tooltip.style.opacity = '0';
        downloadBtn.style.animation = 'download infinite 1s cubic-bezier(0.86, 0, 0.07, 1)';
        downloadBtn.classList.remove('text-pop-up-top');
    }
});

