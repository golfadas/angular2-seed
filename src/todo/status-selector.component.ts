import {Component} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
  selector: 'status-selector',
  template: `<div>
  <select #sel (change)="emitChange(sel.value)">
    <option *ngFor="#status of statuses">{{status}}</option>
  </select>
  </div>`
})

export class StatusSelector {
  @Output() select = new EventEmitter();
  statuses = ["not_completed", "completed"];

  emitChange(value) {
    console.log('emited:', value);
    this.select.emit(value);
  }

  ngOnInit() {
    this.select.emit(this.statuses[0]);
  }
}
