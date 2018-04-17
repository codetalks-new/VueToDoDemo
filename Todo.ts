
function generateGuid(){
  return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15)
}

export default class Todo{
    id:string
    content: string
    created: Date
    updated: Date
    finishTime? : Date
    done = false 
    note = ""

    uiActive = false
  
    constructor(content:string){
      this.id = generateGuid()
      this.content = content
      this.created = new Date()
      this.updated = this.created
    }

 }
