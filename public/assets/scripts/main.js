
// Refs
const homeContainer = document.querySelector('#home-container'),
    aboutBtn = document.querySelector('#about-button'),
    content = document.querySelector('#content'),
    workContent = document.querySelector('#work-content'),
    btnClose = document.querySelector('#close'),
    workBtn = document.querySelector('#work-button'),
    aboutSvg = document.querySelector('#about-svg'),
    workSvg = document.querySelector('#work-svg');


var showingWork = false
var showingAbout = false

// Anime.js Commons Values for SVG Morph
const common = {
    targets: '.polymorph',
    duration: 600,
    loop: false };

var showAbout = function () {
    hideWork();
    showingWork = false;

    homeContainer.classList.remove('active');

    aboutSvg.classList.add('active');
    content.classList.add('active');

    anime({
        ...common,
        easing: 'easeOutQuad',
        fill: ['#e3e3e3', 'rgba(0,200,200,0.5)'],
        points: [
            { value: '215,110 0,110 200,100 215,0' }] });
}

var showWork = function() {
    hideAbout();
    showingAbout = false

    homeContainer.classList.remove('active');

    workSvg.classList.add('active');
    workContent.classList.add('active');

    anime({
        targets: '.work-polymorph',
        easing: 'easeOutQuad',
        duration: 600,
        loop: false,
        fill: ['#e3e3e3', 'rgba(0,200,200,0.5)'],
        points: [
            { value: '215,110 0,110 0,0 10,100' }] });
}

var hideAbout = function() {
    content.classList.remove('active');
    homeContainer.classList.add('active');

    anime({
        ...common,
        easing: 'easeInOutCirc',
        fill: '#e3e3e3',
        points: [
            {value: '215,110 0,110 0,0 215,0'}
        ],
        complete: function() {
            aboutSvg.classList.remove('active');
        }
    })
}

var hideWork = function() {
    workSvg.classList.remove('active');

    homeContainer.classList.add('active');
    workContent.classList.remove('active');


    anime({
        targets: '.work-polymorph',
        easing: 'easeInOutCirc',
        duration: 600,
        loop: false,
        fill: '#e3e3e3',
        points: [
            {value: '215,110 0,110 0,0 215,0'}
        ],
        complete: function() {
            workSvg.classList.remove('active');
        }
    })
}

aboutBtn.addEventListener('click', () => {
    showingAbout ? hideAbout() : showAbout()
    showingAbout = !showingAbout
});

workBtn.addEventListener('click', () => {
    showingWork ? hideWork() : showWork()
    showingWork = !showingWork
});

btnClose.addEventListener('click', () => {
    hideAbout()
    showingAbout = false
});


