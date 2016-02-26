export class Todo {
  completed = false;
  constructor(public message:string = '') {

  }

  toggle():void  {
    this.completed = !this.completed;
  }
}
