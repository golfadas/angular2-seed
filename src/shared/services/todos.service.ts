import {Injectable} from 'angular2/core';
@Injectable()
export class TodoService {
  todos = [
    'Edsger Dijkstra',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper'
  ];

  get(): string[] {
    return this.todos;
  }
  add(value: string): void {
    console.log(value);
    this.todos.push(value);
  }
}
