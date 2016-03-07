import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
  selector: 'todo-input',
  input: '',
  template: `<div>
  <form (submit)="onSubmit()">
  <input type="text" #input (input)="update.emit(input.value)" [(ngModel)]="todoModel">
  </form>
  </div>`
})
export class TodoInput {
  todoModel;

  @Output() update = new EventEmitter();

  constructor(public todoService:TodoService) {

  }

  ngOnInit() {
    this.update.emit('');
  }

  onSubmit() {
   this.todoService.add(this.todoModel);
  }
}
