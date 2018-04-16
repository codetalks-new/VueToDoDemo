<template>
<div id="app">
      <h1>我的待办事项:</h1>
    <input v-model="newTodoText" @keyup.enter="create"  @input="clearError" placeholder="请输入待办事项">
    <button @click="create" >创建</button> 
    <p v-if="error" class="error">{{error}}</p>
    <ul>
      <todo-item v-for="todo in todos" :todo="todo" :key="todo.content"> </todo-item>
    </ul>
</div>
</template>
  <style>
    .error{color:red;}
  </style>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"
import TodoItem from "./TodoItem.vue"
import Todo from "./Todo"


@Component({
    components: {
        'todo-item': TodoItem
    }
})
export default class TodoApp extends Vue{
  newTodoText = ''
  todos :Array<Todo> = [new Todo("学习 Vue")]
  hideCompletedTodos = false
  visitCount = 0
  error:any = null

  create():void{
    const content = this.newTodoText.trim()
    if(content.length  < 1){
      this.error = "待办事项不能为空"
      return
    }
    const todo = new Todo(content)
    this.todos.push(todo)
    this.newTodoText = ""
  }

  clearError():void{
    this.error = null
  }
}



</script>

