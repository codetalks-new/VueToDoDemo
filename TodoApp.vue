<template>
<div class="todo-app-body" id="app">
      <h1>我的待办事项:</h1>
      <div class="row">

      <div class="todo-list-column column">

    <input v-model="newTodoText" @keyup.enter="create"  @input="clearError" placeholder="请输入待办事项">
    <button @click="create" >创建</button> 
    <p v-if="error" class="error">{{error}}</p>
    <ul>
      <todo-item v-for="(todo,index) in todos" :todo="todo" :key="todo.content"
      @deleteTodo="deleteTodo(index)"
      @dblclick.native="showDetail(todo)"
      > </todo-item>
    </ul>
      </div>
      <div class="todo-detail-column column">
        <todo-item-detail ref="todoItemDetail" ></todo-item-detail>
      </div>
      </div>
</div>
</template>
  <style>
    .todo-app-body{padding:20px 15px 20px 15px;
      height: 100%;
    }
    .row{
      display: flex;
      height: 100%;
    }
    .column{
      flex:50%;
      height: 100%;
    }
    .todo-list-column{ background:#f7f7f7;}

    .error{color:red;}
  </style>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"
import TodoItem from "./TodoItem.vue"
import Todo from "./Todo"
import TodoItemDetail from './TodoItemDetail.vue';


@Component({
    components: {
        'todo-item': TodoItem,
        "todo-item-detail":TodoItemDetail
    }
})
export default class TodoApp extends Vue{
  newTodoText = ''
  todos :Array<Todo> = [new Todo("学习 Vue"), new Todo("学习 TypeScript"), new Todo("学习 ES6")]
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

  showDetail(todo:Todo):void{
    for(let it of this.todos){
      it.uiActive = false
    }
    todo.uiActive = true
    // for(let vm of this.$children){
    //   if(vm.todo){
    //     let oldTodo = vm.todo 
    //     vm.$set(oldTodo, 'uiActive', oldTodo.id == todo.id)
    //   }
    // }
    this.$refs.todoItemDetail.todo = todo
  }

  deleteTodo(index:number):void{
    this.todos.splice(index, 1)
  }
}



</script>

