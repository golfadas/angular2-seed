import {Pipe} from "angular2/core";
import {Todo} from "./todo.model";

@Pipe({
  name: 'todoStatusFilter'
})

export class TodoStatusPipe {
  transform(value: Todo[], [status]): Todo[] {
    console.log(status);
    return value.filter(item => item.status === status);
  }
}
