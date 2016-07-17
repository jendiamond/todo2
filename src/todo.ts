import {Component} from 'angular2/core';

class Todo {
  task:string;
  done:boolean;
  constructor(_task:string){
    this.task = task;
    this.task = false;
  }
}

@Component({
  selector:'todo',
  templateUrl: './templates/todo.html'
})

export class TodoComponent{
  public task:string;
  public tasks:Array<Todo> = [];
  // or public tasks:string[];

  constructor(){
  }

  onSubmit() {
    console.log(JSON.stringify(this));
    this.tasks.push(new Todo(this.task))
  }
}
