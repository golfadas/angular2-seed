import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';

@Component({
  selector: 'todo-input',
  input: '',
  template: `<div>
  <form (submit)="onSubmit()">
  <input type="text" [(ngModel)]="todoModel">
  </form>
  </div>`
})
export class TodoInput {
  todoModel;

  constructor(public todoService:TodoService) {

  }
  onSubmit() {
   this.todoService.add(this.todoModel);
  }
}
