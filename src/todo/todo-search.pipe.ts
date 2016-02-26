import {Pipe} from "angular2/core";
import {Todo} from "./todo.model";

@Pipe({
  name: 'todoSearch'
})

export class TodoSearchPipe {
  transform(value: Todo[], [status]): Todo[] {
    console.log(status);
    return value.filter(item => item.status === status);
  }
}
