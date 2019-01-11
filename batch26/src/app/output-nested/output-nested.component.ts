import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-nested',
  templateUrl: './output-nested.component.html',
  styleUrls: ['./output-nested.component.scss']
})
export class OutputNestedComponent implements OnInit {

	@Input() num:number;

	@Output() sqrt = new EventEmitter();
	@Output() square = new EventEmitter();

   constructor() { }

  ngOnInit() {
  }

  getSqrt(){
  let s:any = Math.sqrt(this.num);
  this.sqrt.emit(s);
  }

  getSquare(){
  let s:any = Math.pow(this.num, 2);
  this.square.emit(s);
  }
}
