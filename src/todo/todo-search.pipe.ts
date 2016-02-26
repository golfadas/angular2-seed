import {Pipe} from "angular2/core";

@Pipe({
  name: 'todoSearch'
})

export class TodoSearchPipe {
  transform(value) {
    return value.filter(item => item.message.startsWith('b'));
  }
}
