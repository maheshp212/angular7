import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Input() userInfo:any;

  @Output() getName = new EventEmitter();
  @Output() getTech = new EventEmitter();
  @Output() getExp = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  sendName(name){
    this.getName.emit(name);
  }
  sendTech(a){
    this.getTech.emit(a)
  }
  sendExp(exp){
    this.getExp.emit(exp);
  }
}
