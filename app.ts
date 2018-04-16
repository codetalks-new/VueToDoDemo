import Vue from "vue"
import Component from "vue-class-component"
import TodoItem from "./TodoItem.vue"
import Todo from "./Todo"


@Component
class App extends Vue{
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

const app = new App({ el: '#app',
  components: {
    'todo-item': TodoItem
  }
})
