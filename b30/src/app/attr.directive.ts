import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){};
  @Input() msg;
  @Input() fname;

  @Output() asdf = new EventEmitter();

  
  constructor() { }

  @HostListener('mouseout')
  callMe(){ // callback method name () can be anything
    
    console.log(this.msg); //dir- logic
    this.appAttr(); //custom logic
    console.log(this.fname); //dir - logic

    this.asdf.emit();
  }
}
