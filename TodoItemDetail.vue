<template>
 <div>
     <h3>{{todo.content}} </h3>
     <div>
         <p><span class="info-label">创建时间:</span> <span class="todo-detail-item">{{todo.created | friendlyDateTime}}</span></p>
         <p v-if="todo.done"><span class="info-label">完成时间:</span> <span class="todo-detail-item">{{todo.finishTime}}</span></p>
     </div>
     <div> 
         <textarea v-model="todo.note" placeholder="备注"></textarea>
     </div>
 </div> 
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"
import { Prop } from "vue-property-decorator"
import Todo from "./Todo"

@Component
export default class TodoItemDetail extends Vue {
    @Prop() todo: Todo
}
</script>

