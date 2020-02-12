// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#i_write_javaScript',
  router,
  template: '<App/>',
  components: { App }
});

var nav = document.getElementsByTagName('nav');
for  (var i = 0 ; i < nav.length; i++) {
	nav[i].addEventListener("click", function(e){
	  document.getElementById("check").checked = false;
	}, 
	false)
};