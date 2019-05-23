'use strict';
// @ts-check

const preload = function () {
    document.getElementsByTagName('body')[0].classList.remove('preload');
};

window.onload = preload;

let mainInfo = document.querySelector('.main-info'),
    profilePhoto = document.querySelector('.profile-photo'),
    header = document.querySelector('.header-wrap'),
    summarySection = document.querySelector('.about-section');

window.addEventListener('scroll', function (e) {
    let coordsMain = mainInfo.getBoundingClientRect().top,
        coordsHeader = header.getBoundingClientRect().top,
        coordsSummary = summarySection.getBoundingClientRect().top,
        heightMainInfo = mainInfo.getBoundingClientRect().height;

    if (coordsMain < -305) {
        mainInfo.classList.add('scroll');
        profilePhoto.classList.add('hide');
        summarySection.classList.add('about-section-after-scroll');
    } else if (coordsHeader > -250) {
        mainInfo.classList.remove('scroll');
        profilePhoto.classList.remove('hide');
        summarySection.classList.remove('about-section-after-scroll');
        summarySection.style.marginTop = '0';
    } else if (coordsSummary < 0) {
        summarySection.style.marginTop = (heightMainInfo * 2.8) + 'px';
    }
});