import {Pipe} from "angular2/core";
import {Todo} from "./todo.model";

@Pipe({
  name: 'todoSearch'
})

export class TodoSearchPipe {
  transform(value: Todo[]) {
    return value.filter(item => item.status === 'not_completed');
  }
}
