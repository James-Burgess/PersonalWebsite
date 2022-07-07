document.addEventListener('DOMContentLoaded', function () {
  // Refs
  const homeContainer = document.querySelector('#home-container'),
      aboutBtn = document.querySelector('#about-button'),
      content = document.querySelector('#content'),
      workContent = document.querySelector('#work-content'),
      btnClose = document.querySelector('#close'),
      workBtn = document.querySelector('#work-button'),
      aboutSvg = document.querySelector('#about-svg'),
      appView = document.querySelector('#app-view'),
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
      aboutBtn.classList.add('active');
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
      workBtn.classList.add('active');
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
              aboutBtn.classList.remove('active');
          }
      })
  }

  var hideWork = function() {
      workSvg.classList.remove('active');
      workBtn.classList.remove('active');

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


  var card = document.querySelector(".card");
  var playing = false;
  var homeDisabled = false;

  document.querySelector("#contact-button").addEventListener('click', (e) => {toggleContact(e)});
  document.querySelector("#home-button").addEventListener('click', (e) => {toggleContact(e)});
  document.querySelector(".contact-container").addEventListener('click', (e) => {toggleContact(e)});
  document.forms["contact-form"].addEventListener('submit', async (e) => handleFormSubmit(e));

  let arr = [
      document.querySelector(".contact-container"),
      document.querySelector("#home-button"),
      document.querySelector("#contact-button")
  ];
  var toggleContact = function(e) {
      if (!arr.includes(e.target))
          return;

      if (playing)
          return;

      if(homeDisabled){ appView.classList.remove('disabled');  }
      playing = true;

      anime({
          targets: card,
          scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
          rotateY: {value: '+=180', delay: 200},
          easing: 'easeInOutSine',
          duration: 800,
          complete: function (anim) {
              if(!homeDisabled){ appView.classList.add('disabled') }
              playing = false;
              hideAbout();
              hideWork();
              homeDisabled = !homeDisabled
              annotation.show()
              showingAbout = false;
              showingWork = false;
          }
      });
  }

    var handleFormSubmit = async function (e) {
        e.preventDefault();

        await fetch(e.target.action, {
            method: 'POST',
            mode: 'no-cors',
            body: new URLSearchParams(new FormData(e.target)),
        }).then((resp) => {
            return resp.json;
        }).then((data) => {
            showFormSuccess();
        }).catch((err) => {
            console.error(err.message);
            alert("Something went wrong. Please try again later.");
        });
    }

    var showFormSuccess = async function () {
        let amountIcons = 25;

        for (let i = 0; i < amountIcons; i++) {
            let img = document.createElement('img');
            img.src = './assets/images/flame.svg';
            img.style.position = 'absolute';
            img.style.top = '-70px';
            img.style.left = `${Math.random() * 100}%`;
            img.style.transform = `rotate(${Math.random() * 360}deg)`;
            img.style.transformOrigin = '50% 50%';
            img.style.zIndex = 1;
            img.style.width = '50px';
            img.style.height = '50px';
            document.body.appendChild(img);

            anime({
                targets: img,
                top: {
                    value: `${Math.random() * 100}%`,
                    duration: 2500,
                    delay: Math.random() * 1000,
                },
                rotate: {
                    value: Math.random() * 360,
                    duration: 2500
                },
                opacity: {
                    value: 0,
                    duration: 2500
                },
                easing: 'easeInOutSine',
                complete: function (anim) {
                    document.body.removeChild(img);
                }
            });
        }
    }

  const annotate = RoughNotation.annotate;

  document.querySelector('#loading').classList.remove('active');


  const e = document.querySelector('.intro-text');
  const annotation = annotate(e, { type: 'box', animationDuration: 2000, strokeWidth: 4, padding: 0});
  annotation.show();

})
