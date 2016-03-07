import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';
import {TodoItemRenderer} from './todo-item-renderer.component';
import {TodoStatusPipe} from "./todo-status-filter.pipe";
import {Input} from "angular2/core";
import {TodoSearchPipe} from "./todo-search.pipe";

@Component({
  selector: 'todo-list',
  pipes: [TodoStatusPipe, TodoSearchPipe],
  directives: [TodoItemRenderer],
  template: `<div>
    <ul>
    <li *ngFor="#todo of todoService.get() | todoSearch : term | todoStatusFilter : status">
    <todo-item-renderer
    [todo]="todo"
    (toggle)="todoService.toggleTodo($event)"></todo-item-renderer>
    </li>
    </ul>
  </div>`
})

export class TodoList {
  @Input() status;
  @Input() term;

  constructor(public todoService:TodoService) {

  }
}
