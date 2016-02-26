import {Injectable} from 'angular2/core';
import {Todo} from '../../todo/todo.model';

@Injectable()
export class TodoService {
  todos:[Todo] = [
    new Todo('ola'),
    new Todo('ole'),
    new Todo('bla')
  ];

  get(): Todo[] {
    return this.todos;
  }
  add(value: string): void {
    this.todos.push(new Todo(value));
  }
}
