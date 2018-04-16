<template>
      <li>
        <span v-show="todo.done" class="done-marker" @click="markTodo">✓</span>
        <span v-show="!todo.done" class="todo-marker" @click="markDone">☐</span>
        <span class="content">{{todo.content}}</span>
      </li>
</template>
<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { Prop } from "vue-property-decorator"
import Todo from "./Todo"

@Component
export default class TodoItem extends Vue {
  @Prop() todo:Todo

  markDone():void{
    this.todo.done = true
  }

  markTodo():void{
    this.todo.done = false
  }
}
</script>
