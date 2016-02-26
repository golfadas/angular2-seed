import {Component} from 'angular2/core';
import {TodoInput} from '../../todo/todo-input';
import {TodoList} from '../../todo/todo-list';
import {StatusSelector} from "../../todo/status-selector.component";

@Component({
  selector: 'sd-app',
  directives: [TodoInput, TodoList, StatusSelector],
  template: `<div>
  <todo-input></todo-input>
  <status-selector (select)="status = $event"></status-selector>
  <todo-list [status]="status"></todo-list>
  </div>`
})

export class AppComponent {}
