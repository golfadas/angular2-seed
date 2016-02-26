import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';
import {TodoItemRenderer} from './todo-item-renderer.component';
import {TodoSearchPipe} from "./todo-search.pipe";
import {Input} from "angular2/core";

@Component({
  selector: 'todo-list',
  pipes: [TodoSearchPipe],
  directives: [TodoItemRenderer],
  template: `<div>
    <ul>
    <li *ngFor="#todo of todoService.get() | todoSearch : status">
    <todo-item-renderer
    [todo]="todo"
    (toggle)="todoService.toggleTodo($event)"></todo-item-renderer>
    </li>
    </ul>
  </div>`
})

export class TodoList {
  @Input() status;
  constructor(public todoService:TodoService) {

  }
}
