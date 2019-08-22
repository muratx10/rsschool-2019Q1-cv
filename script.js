'use strict';

const preload = function () {
    document.getElementsByTagName('body')[0].classList.remove('preload');
};

window.onload = preload;

const main = document.querySelector('main'),
    mainInfo = document.querySelector('.main-info'),
    profilePhoto = document.querySelector('.profile-photo'),
    header = document.querySelector('.header-wrap'),
    summarySection = document.querySelector('.about-section'),
    downloadBtn = document.querySelector('.icon-download'),
    tooltip = document.querySelector('.tooltip'),
    emptyCap = document.querySelector('.empty-cap'),
    h1 = document.querySelector('.main-info h1'),
    h2 = document.querySelector('.main-info h2'),
    icons = Array.from(document.querySelectorAll('.socialmedia span')),
    techSkills = document.querySelector('.techSkills');

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

//This block is animating skills level with text and progress line
const itemsLevel = Array.from(document.querySelectorAll('.item .list li'));
const progressLine = Array.from(document.querySelectorAll('.progress'));
const animateSkills = () => {
    for (let i = 0; i < itemsLevel.length; i++) {
        let level = parseInt(itemsLevel[i].dataset.level);
        let outputNum = 0;
        setInterval(() => {
            let span = itemsLevel[i].firstElementChild;
            span.textContent = `(${outputNum}%)`;
            progressLine[i].style.width = `${outputNum}%`;
            progressLine[i].style.background = `linear-gradient(45deg, rgba(181,0,0,1) 0%, hsla(${outputNum}, 100%, 50%, 1) 100%, rgba(34,255,25,1) 120%)`;
            if (outputNum === level) {
                clearInterval();
            } else {
                outputNum++;
            }
        }, 20);
    };
}

let animateFlag = true;

window.addEventListener('scroll', e => {
    let coordsMain = mainInfo.getBoundingClientRect().top,
        coordsHeader = header.getBoundingClientRect().top,
        heightMainInfo = mainInfo.getBoundingClientRect().height;

    if ((techSkills.getBoundingClientRect().top + 350 < window.innerHeight) && animateFlag) {
        animateFlag = false;
        animateSkills();
    };
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