export default class Todo{
    content: string
    created: Date
    done = false 
  
    constructor(content:string){
      this.content = content
      this.created = new Date()
    }

 }
