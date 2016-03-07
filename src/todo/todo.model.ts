export class Todo {
  constructor(public message:string = '',
              public status:string = 'not_completed') {}

  toggle():void  {
    if (this.status === 'completed') {
      this.status = 'not_completed';
    }else {
      this.status = 'completed';
    }
  }
}
