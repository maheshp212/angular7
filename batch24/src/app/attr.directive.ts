import { Directive,Input, HostListener, Output, EventEmitter  } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

	@Input() appAttr(){};
	@Input() msg;
	@Input() fname;
  @Output() output2= new EventEmitter();

  constructor() { }

  @HostListener('click')
  callMe(){
  	console.log('directive invoked first :::' + this.fname);
  	this.appAttr();
  	console.log('directive invoked second :: ' + this.msg);
    var a = 'byee'
    this.output2.emit(a);
  }

}
