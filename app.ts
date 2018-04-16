import Vue from "vue"
import TodoApp from "./TodoApp.vue"
const app = new Vue({ 
  el: '#app',
  render: h => h(TodoApp)
 })