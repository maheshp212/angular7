import { Directive ,Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){}
  
  @Input() msg;
  @Input() fname:string;

  @Output() sendData = new EventEmitter();
  
  constructor() {
    console.log('Heloo I m attr directive');
  }

  @HostListener('click')
  callMe(){
    
    console.log(this.msg);
    console.log(this.fname);
    this.appAttr();
    let c = this.msg + this.fname;

    this.sendData.emit(c);
  }
}
