import Vue from "vue"
import Component from "vue-class-component"

@Component
class App extends Vue{
  greeting = 'Welcome to your Vue.js app!'
  docsURL = 'http://vuejs.org/guide/'
  discordURL = 'https://chat.vuejs.org'
  forumURL = 'http://forum.vuejs.org/'

  humanizeURL(url:string): string{
    return url
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '')
  }
}

const app = new App({ el: '#app', })