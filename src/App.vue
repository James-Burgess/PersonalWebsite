<template>
  <div id="app">
<!--     <div id="menuToggle">
      <input id="check" type="checkbox">
      <span></span><span></span><span></span>
      <nav>
        <router-link to="/">hello</router-link>
        <router-link to="/whois">whois?</router-link>
        <router-link to="/work">work</router-link>
        <router-link to="/resume">resume</router-link>
        <router-link to="/contact">contact</router-link>  
      </nav>

    </div> -->
  <router-view></router-view>

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
  #app, button{
    font-family: 'Amatic SC', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
