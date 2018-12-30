import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
	@Input() appAttr(){};
	@Input() msg:string;
	@Input() fname:string;
	@Output() archive = new EventEmitter();
	@Output() delete = new EventEmitter();
	@Output() snooze = new EventEmitter();
	@Output() read = new EventEmitter();
  constructor() { }

  @HostListener('click')
  callMe(){
  	console.log('custom directive Invoked');
  	this.appAttr();
  	console.log(this.msg + '::' + this.fname);
  	this.businessLogic();
  }

  businessLogic(){
  	console.log('build your cusom logic');
  	this.read.emit('this is output data');
  }

}
