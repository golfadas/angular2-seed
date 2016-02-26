import {Component} from 'angular2/core';
import {TodoService} from '../shared/services/todos.service';

@Component({
  selector: 'todo-list',
  template: `<div>
    <ul>
    <li *ngFor="#todo of todoService.get()">{{todo}}</li>
    </ul>
  </div>`
})

export class TodoList {
  constructor(public todoService:TodoService) {

  }
}
