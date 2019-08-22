'use strict';

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
    h1 = document.querySelector('.main-info h1'),
    h2 = document.querySelector('.main-info h2'),
    icons = Array.from(document.querySelectorAll('.socialmedia span'));

const title = '{ Junior Front-End Developer }'.split('');
const lastName = 'Shirmurad AKMAMEDAU'.split('');
let i = 0;
let typo = null;

const timer = setInterval(() => {
    h1.textContent += lastName[i];
    if (i === lastName.length - 1) {
        typo = true;
        i = 0;
        h1.classList.remove('caret');
        h2.classList.add('caret');
        clearInterval(timer);
    } else {
        i++;
    }
}, 50);

const timer2 = setInterval(() => {
    if (typo) {
        h2.textContent += title[i];
        if (i === title.length - 1) {
            clearInterval(timer2);
        } else {
            i++;
        }
    }
}, 50);

window.addEventListener('scroll', function (e) {
    let coordsMain = mainInfo.getBoundingClientRect().top,
        coordsHeader = header.getBoundingClientRect().top,
        heightMainInfo = mainInfo.getBoundingClientRect().height;

    if (coordsMain < -(heightMainInfo)) {
        mainInfo.classList.add('scroll');
        profilePhoto.classList.add('hide');
        mainInfo.style.boxShadow = '0 0 10px 5px black';
        emptyCap.style.position = 'relative';
        h2.classList.remove('caret');
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.padding = '10px';
            icons[i].style.border = '1px solid #fff';
        }
    } else if (coordsHeader > -(heightMainInfo + 550)) {
        mainInfo.classList.remove('scroll');
        profilePhoto.classList.remove('hide');
        mainInfo.style.boxShadow = 'none';
        emptyCap.style.position = 'absolute';
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.padding = '15px';
            icons[i].style.border = '2px solid #fff';
        }
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


const itemsLevel = Array.from(document.querySelectorAll('.item .list li'));
const progressLine = Array.from(document.querySelectorAll('.progress'));
for (let i = 0; i < itemsLevel.length; i++) {
    let level = parseInt(itemsLevel[i].dataset.level);
    let outputNum = 0;
    const timer3 = setInterval(() => {
        let span = itemsLevel[i].firstElementChild;
        span.textContent = `(${outputNum}%)`;
        progressLine[i].style.width = `${outputNum}%`;
        if (outputNum === level) {
            clearInterval(timer3);
        } else {
            outputNum++;
        }
    }, 20);
};

