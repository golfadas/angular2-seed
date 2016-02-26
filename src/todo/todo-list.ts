import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';
import {TodoItemRenderer} from './todo-item-renderer.component';

@Component({
  selector: 'todo-list',
  directives: [TodoItemRenderer],
  template: `<div>
    <ul>
    <li *ngFor="#todo of todoService.get()">
    <todo-item-renderer [todo]="todo"></todo-item-renderer>
    </li>
    </ul>
  </div>`
})

export class TodoList {
  constructor(public todoService:TodoService) {

  }
}
