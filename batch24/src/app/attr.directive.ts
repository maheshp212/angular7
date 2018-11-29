import { Directive,Input, HostListener  } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

	@Input() appAttr(){};
	@Input() msg;
	@Input() fname;

  constructor() { }

  @HostListener('click')
  callMe(){
  	console.log('directive invoked first :::' + this.fname);
  	this.appAttr();
  	console.log('directive invoked second :: ' + this.msg);
  }

}
