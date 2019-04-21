import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() msg;
  @Input() fname;
  char:string;
  @Output() sendChar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callMe(){
    let at = parseInt(this.char);
    console.log(this.fname.charAt(at));
    //this.sendChar.emit(this.fname.charAt(at))
    this.sendChar.emit(this.msg.charAt(at))
  }

}
