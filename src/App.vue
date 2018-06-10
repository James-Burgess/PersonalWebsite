<template>
  <div id="app">
<!--     <div id="menuToggle">
      <input id="check" type="checkbox">
      <span></span><span></span><span></span>
      <nav>
        
        <router-link to="/whois">whois?</router-link>
        <router-link to="/work">work</router-link>
        <router-link to="/resume">resume</router-link>
        <router-link to="/contact">contact</router-link>  
      </nav>

    </div> -->
    <div class="hello">
      <section id="intro">
        <h1>James Burgess, <br> Full Stack Developer.</h1>
        <h2>
            I build experiences. 
            <br>
            mostly with Django and Vue.js
        </h2>
      </section>

      <section id="projects">
        <h3>Learn More</h3>
        <div class="project-block">
          <router-link to="/"><button>Webapps</button></router-link>
          <router-link to="/resume"><button>Static Sites</button></router-link>
          <router-link to="/work"><button>Mobile Apps</button></router-link>
          <router-link to="/resume"><button>Dataprocessing</button></router-link>
          <router-link to="/resume"><button>GCP</button></router-link>
          <router-link to="/resume"><button id="mentoring">Mentoring</button></router-link>
          <router-link to="/contact"><button>Offline</button></router-link>
        </div>
      </section>  

      <section id="viewport">
        <router-view></router-view>
      </section>
    </div>

    <section id="contact">
        <h3>Contact</h3>
        <p>contact@jimmyb.co.za</p>
    </section>
  </div>
</template>

<script>
var toggled = false;
export default {
  name: 'app',
   mounted() {
    let showMore = document.querySelector('#projects h3');
    let intro = document.querySelector('#intro');

    showMore.addEventListener('click', () => this.toggleShowMore())

    const buttons = document.querySelectorAll('#projects button');
    [].map.call(buttons, (elem) => {
      elem.addEventListener('click', () => this.showProject())
    });
    
    intro.addEventListener('mousemove', () => this.backgroundColorChanger(event), true)
  },
  methods: {
    toggleShowMore: function() {
      let projects = document.getElementById('projects');
      let hello = document.querySelector('.hello');
      let intro = document.querySelector('#intro');
      let showMore = document.querySelector('#projects h3');

      
      if (!toggled){
        toggled = true
        projects.style = "transform: translateY(-100%)"
        showMore.style = "background: #323643";         
      }else{
        toggled = false
        projects.style = "transform: translateY(0%)"
        hello.style = "overflowY: hidden; " 
      }
    },
    showProject: function(){
      let sectionTitle = event.target.innerText.replace(' ', '-');
      let hello = document.querySelector('.hello');
      let projects = document.getElementById('projects');
      const buttons = document.querySelectorAll('#projects button');

      // make page scrollable
      // hello.style = "overflowY: scroll; height: 180vh";
      hello.style = "transition: background-color 0.1s ; background: black"
      projects.style = "transform: translateY(0%)"
      projects.classList.add('heading');
      viewport.style = "transform: translateY(-100%)";


      // //scroll to new view
      // window.window.scroll({
      //   top: 800, 
      //   left: 0, 
      //   behavior: 'smooth' 
      // });



      // remove styles and add bg to target
      [].map.call(buttons, (elem) => {elem.style = ""});
      event.target.style = "background: purple"

    },
    backgroundColorChanger: function(event){
      let posCode = this.mouse_position(event);
      let intro = document.querySelector('#intro');
      let showMore = document.querySelector('#projects h3');

      intro.style = "background: #" + posCode +";";
      showMore.style = "background: #" + (999999 - posCode) +";";
    },
    mouse_position: function(event){
      let posX = event.clientX;
      let posY = event.clientY;
      posX += '999'
      posY += '999'
      return (posX.substring(0,3) + posY.substring(0,3))
    }
  }
};

</script>

<style>
  /*css reseter*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  #app, button{
    font-family: 'Amatic SC', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .hello{
  overflow: hidden;
  height: 100vh;
  max-width: 100vw;
  }
  #intro{
    transition: background-color 2s linear;
    background: #606470;
    height: 100vh;
    z-index: 0;
  }
  #intro h1{
    font-size: 10em;
  }
  #intro h2{
    font-size: 3em;
  }
  #intro h2, #intro h1{
    text-align: center;
    padding-top: 5vh;
  }
  .heading{
    max-height: 18vh;
    top: 0;
    position: fixed;
  }
  #projects{
    height: 20vh;
    width: 100vw;
    background: #323643;
    z-index: 30;
    transition-duration: 1s;
  }
  #projects h3{
    transition: background-color 3s ease;
    text-align: center;
    background: #323643;
    padding: 20px;
    margin-left: 70%;
    width: 20%;
    border-radius: 30px 30px 0px 0px;
    transform: translateY(-98%);
    font-size: 2em;
    z-index: 30;
  }
  .project-block{
    display: flex;
    flex-directoion: row;
    justify-content: center;
    align-items: center;
  }
  #projects button{
    padding: 15px;
    width: 200px;
    margin-top: -20px;
    margin-left: 5px;
    margin-right: 5px;
    background: #3DC2FC ;
    border: none;
    highlight: none;
    font-size: 2em;
  }
  #viewport{
    border: 1px solid black;
    height: 82vh;
    width: 100vw;
    overflow: hidden;
    background: #f7f7f7;
    top: 100vh;
    position: fixed;
    transition-duration: 1s;
  }
  #contact{
    position: fixed;
    display: none;
  }
</style>
