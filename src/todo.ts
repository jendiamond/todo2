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
  public tasks:Array<Todo> = [];

  constructor(){
    let storage = window.localStorage['codeDistrict'];
    if(storage){
      this.tasks = JSON.parse(storage);
    }
  }

  onSubmit() {
    console.log(JSON.stringify(this));
    this.tasks.push(new Todo(this.task));
    this.task = "";
    this.persistChange();
  }

  deleteIt(index){
    this.tasks = this.tasks.filter((elem, ndx) => ndx !== index);
    this.persistChange();
  }

  persistChange(){
    window.localStorage['codeDistrict'] = JSON.stringify(this.tasks);
  }
}
