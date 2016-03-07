import {Pipe} from "angular2/core";
import {Todo} from "./todo.model";

@Pipe({
  name: 'todoSearch'
})

export class TodoSearchPipe {
  transform(value: Todo[], [message]): Todo[] {
    console.log(message);
    console.log(value);
    if(!message || message.length === 0) {
      console.log('nothing written');
      return value;
    }
    return value.filter(item => item.message === message);
  }
}

