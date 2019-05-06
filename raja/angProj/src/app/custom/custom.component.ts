import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  @Input() msg:string;
  @Input() fname:string;
  @Input() user:any;
  @Output() name = new EventEmitter();
  @Output() gender = new EventEmitter();
  @Output() exp = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  getName(){
    this.name.emit(this.user.name);
  }
  getGender(){
    this.gender.emit(this.user.gender)
  }

  getExp(){
    this.exp.emit(this.user.exp)

  }

}
