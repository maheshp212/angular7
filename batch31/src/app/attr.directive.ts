import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){};
  @Input() msg;
  @Input() fname;

  @Output() getFname = new EventEmitter();
  constructor() { }


  @HostListener('click')
  callMe(){
    console.log('##############################');
    console.log(this.msg);
    console.log(this.fname);

    this.appAttr();

    console.log('remaining logic');

    this.getFname.emit(this.fname)
  }

}
