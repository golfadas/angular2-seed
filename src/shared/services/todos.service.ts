import {Injectable} from 'angular2/core';
import {Todo} from '../../todo/todo.model';

@Injectable()
export class TodoService {
  todos: Todo[] = [
    new Todo('ola', 'not_completed'),
    new Todo('ola', 'completed'),
    new Todo('ole'),
    new Todo('bla')
  ];

  get(): Todo[] {
    return this.todos;
  }
  add(value: string): void {
    this.todos = [...this.todos, new Todo(value)];
  }

  toggleTodo(todo: Todo) {
    todo.toggle();

    const i = this.todos.indexOf(todo);

    this.todos = [
      ...this.todos.slice(0,i),
      todo,
      ...this.todos.slice(i + 1)
    ];
  }
}
