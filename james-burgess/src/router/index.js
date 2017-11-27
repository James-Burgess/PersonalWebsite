import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import whois from '@/components/whois'
import work from '@/components/work'
import resume from '@/components/resume'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/whois',
    	name: 'whois',
    	component: whois
    },
    {
    	path:'/work',
    	name: 'work',
    	component: work
    },
    {
    	path:'/resume',
    	name: 'resume',
    	component: resume
    },
    {
    	path:'/contact',
    	name: 'contact',
    	component: contact
    }
  ]
})
