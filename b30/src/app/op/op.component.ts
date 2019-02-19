import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-op',
  templateUrl: './op.component.html',
  styleUrls: ['./op.component.less']
})
export class OpComponent implements OnInit {

  @Input() user;

  @Output() name = new EventEmitter();
  @Output() age = new EventEmitter();
  @Output() gender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  getName(name){
    this.name.emit(name)
  }
  getAge(age){
    this.age.emit(age)
  }
  getGender(gender){
    this.gender.emit(gender);    
  }
}
