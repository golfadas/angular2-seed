import {Component} from 'angular2/core';
import {TodoInput} from '../../todo/todo-input';
import {TodoList} from '../../todo/todo-list';

@Component({
  selector: 'sd-app',
  directives: [TodoInput, TodoList],
  template: `<div><todo-input></todo-input><todo-list></todo-list></div>`
})

export class AppComponent {}
