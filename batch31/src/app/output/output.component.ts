import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() user;

  @Output() getName = new EventEmitter();
  @Output() getAge = new EventEmitter();
  @Output() getPhone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  age(age){
    this.getAge.emit(age);
  }
  name(name){
    this.getName.emit(name);
  }
  phone(phone){
    this.getPhone.emit(phone);
  }
}
