import {Component} from 'angular2/core';
import {TodoInput} from '../../todo/todo-input';

@Component({
  selector: 'sd-app',
  directives: [TodoInput],
  template: `<div><todo-input></todo-input></div>`
})

export class AppComponent {}
