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
    socialMediaBlock = document.querySelector('.socialmedia'),
    tooltip = document.querySelector('.tooltip');


window.addEventListener('scroll', function (e) {
    let coordsMain = mainInfo.getBoundingClientRect().top,
        coordsHeader = header.getBoundingClientRect().top,
        coordsSummary = summarySection.getBoundingClientRect().top,
        heightMainInfo = mainInfo.getBoundingClientRect().height;

    if (coordsMain < -305) {
        mainInfo.classList.add('scroll');
        profilePhoto.classList.add('hide');
        summarySection.classList.add('about-section-after-scroll');
        mainInfo.style.boxShadow = '0 0 10px 5px black';
    } else if (coordsHeader > -250) {
        mainInfo.classList.remove('scroll');
        profilePhoto.classList.remove('hide');
        summarySection.classList.remove('about-section-after-scroll');
        summarySection.style.marginTop = '0';
        mainInfo.style.boxShadow = 'none';
    } else if (coordsSummary < 0) {
        summarySection.style.marginTop = (heightMainInfo * 2.8) + 'px';
    }
});

mainInfo.addEventListener('mouseover', (e) => {
    const el = Array.from(e.target.classList).includes('icon-download');
    if (el) {
        tooltip.style.opacity = '1';
    } else {
        tooltip.style.opacity = '0';
    }
});

