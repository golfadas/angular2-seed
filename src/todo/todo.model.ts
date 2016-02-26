export class Todo {
  status:string = 'not_completed';

  constructor(public message:string = '') {

  }

  toggle():void  {
    if (this.status === 'completed') {
      this.status = 'not_completed';
    }else {
      this.status = 'completed';
    }
  }
}
