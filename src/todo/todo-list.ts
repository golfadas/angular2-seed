import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';
import {TodoItemRenderer} from './todo-item-renderer.component';
import {TodoSearchPipe} from "./todo-search.pipe";

@Component({
  selector: 'todo-list',
  pipes: [TodoSearchPipe],
  directives: [TodoItemRenderer],
  template: `<div>
    <ul>
    <li *ngFor="#todo of todoService.get() | todoSearch">
    <todo-item-renderer
    [todo]="todo"
    (toggle)="todoService.toggleTodo($event)"></todo-item-renderer>
    </li>
    </ul>
  </div>`
})

export class TodoList {
  constructor(public todoService:TodoService) {

  }
}
