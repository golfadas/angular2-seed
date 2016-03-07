export class Todo {
  constructor(public message:string = '',
              public status:string = 'not_completed') {}

  toggle():Todo  {
    if (this.status === 'completed') {
      status = 'not_completed';
    }else {
      status = 'completed';
    }
    return Object.assign({}, this, {status});
  }
}
