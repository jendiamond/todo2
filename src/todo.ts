import {Component} from 'angular2/core';

class Todo {
  task:string;
  done:boolean;
  constructor(_task:string){
    this.task = _task;
    this.done = false;
  }
}

@Component({
  selector:'todo',
  templateUrl: './templates/todo.html'
})

export class TodoComponent{
  public task:string;
  public tasks:Array<Todo> = [
    {done:false, task: "walk the cat"}
  ];
  // public tasks:string[];

  constructor(){
  }

  onSubmit() {
    console.log(JSON.stringify(this));
    this.tasks.push(new Todo(this.task));
    this.task="";
  }
}
