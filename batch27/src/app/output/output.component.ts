import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
	@Input() msg:string;
	@Input() user:any;
	@Output() getName = new EventEmitter();
	@Output() getAge = new EventEmitter();
  constructor() { }

  ngOnInit() {

  	console.log(this.msg);
  	console.log(this.user)
  }

  name(){
  	this.getName.emit(this.user.name);
  }
  age(){
  	this.getAge.emit(this.user.age);
  }

}
