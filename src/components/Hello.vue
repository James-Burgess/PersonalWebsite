<template>
  <div class="hello">
    <section id="intro">
      <h1>James Burgess, <br> Full Stack Developer.</h1>
      <h2>
          I can build anything on the web, but mostly, 
          <br>
          I Build robust webapps with Django and Vue.js
      </h2>
    </section>
    <section id="projects">
      <h3>Learn More</h3>
      <div class="project-block">
        <button>Webapps</button>
        <button>Static Sites</button>
        <button>Mobile Apps</button>
        <button>Dataprocessing</button>
        <button>GCP</button>
        <button id="mentoring">Mentoring</button>
        <button>Offline</button>
      </div>
    </section>
    <section id="contact">
      <h3>Contact</h3>
      <p>contact@jimmyb.co.za</p>
    </section>
  </div>
</template>

<script>
var toggled = false;

export default {
  name: 'Hello',
  mounted() {
    let showMore = document.querySelector('#projects h3');
    showMore.addEventListener('click', () => this.toggleShowMore())

    const buttons = document.querySelectorAll('#projects button');
    [].map.call(buttons, (elem) => {
      elem.addEventListener('click', () => this.showProject())
    });

  },
  methods: {
    toggleShowMore: function() {
      let projects = document.getElementById('projects');
      let hello = document.querySelector('.hello');

      if (!toggled){
        toggled = true
        projects.style = "transform: translateY(-100%)"
        
      }else{
        toggled = false
        projects.style = "transform: translateY(0%)"
        hello.style = "overflowY: hidden; "        
      }
    },
    showProject: function(){
      let sectionTitle = event.target.innerText.replace(' ', '-');
      let hello = document.querySelector('.hello');
      const buttons = document.querySelectorAll('#projects button');

      // make page scrollable
      hello.style = "overflowY: scroll; height: 180vh";

      //scroll to new view
      window.window.scroll({
  top: 800, 
  left: 0, 
  behavior: 'smooth' 
});

      // remove styles and add bg to target
      [].map.call(buttons, (elem) => {elem.style = ""});
      event.target.style = "background: purple"

    }
  }
}
</script>

<style scoped>
.hello{
  overflow: hidden;
  height: 100vh;
  max-width: 100vw;
}
#intro{
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
#projects{
  height: 20vh;
  background: #323643;
  z-index: 30;
  transition-duration: 1s;
}
#projects h3{
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
  padding: 20px;
  width: 200px;
  margin-top: -20px;
  margin-left: 10px;
  margin-right: 10px;
  background: #3DC2FC ;
  border: none;
  highlight: none;
  font-size: 2em;
}

#contact{
  position: fixed;
  display: none;
}
</style>
