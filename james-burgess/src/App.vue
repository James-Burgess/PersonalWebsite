<template>
  <div id="app">
    <div id="menuToggle">
      <input id="check" type="checkbox"><span></span><span></span><span></span>
      <nav>
        <router-link to="/">Hello</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  <router-view></router-view>
  <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'app'
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav{
  padding-top: 15vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(255,255,255,0.9);
  position: fixed;
  top: -105vh;
  right: 0;
  left: 0;

    transition-duration: 1s;
}
nav a{
  text-decoration: none;
  color: white;
  padding: 5px 20px;
  border-radius: 50VW;
  
  background: darkgrey;
  transition-duration: 1s;
  font-size: 2em;
  
}
nav a:hover{
  opacity: 0.5;
}
.router-link-exact-active{
  background: black;
}

#menuToggle
{
  display: block;
  position: absolute;
  top: 50px;
  right: 50px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

#menuToggle span{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #fff;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child{
  transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2){
  transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span{
  opacity: 1;
  transform: rotate(45deg) translate(-2.5px, -1px);
  background: #232323;
}
#menuToggle input:checked ~ span:nth-last-child(3){
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2){
  transform: rotate(-45deg) translate(0, -1px);
}

#menuToggle input:checked ~ nav{
  transform: translate(0,95vh);
}
nav a:active {
  transform: translate(0, 9vh);
}
</style>
