import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
@Input() appAttr(){};
@Input() msg;
@Input() fname;

@Output() data = new EventEmitter()

  constructor() { }

  @HostListener('click')
  callMe(){
    console.log('custom directive invoked');
  	this.appAttr();
    console.log(this.msg)
    console.log(this.fname)
    this.extendedFunctionality()
    this.data.emit(this.fname)

  }

  extendedFunctionality(){
  	console.log('extra business logic');
  }

}



/*<div [appAttr]="login" [fname]="'hello'" [msg]="fname">
 Custom Directive</div>*/