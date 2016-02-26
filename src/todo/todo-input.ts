import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';

@Component({
  selector: 'todo-input',
  input: '',
  template: `<div>
  Im a todo input
  <input type="text" #myInput>
  <button (click)="onClick(myInput.value)" >Click me</button>
  </div>`
})
export class TodoInput {
  constructor(public todoService:TodoService) {

  }
  onClick(value) {
    console.log(this.todoService.add(value));
  }
}
