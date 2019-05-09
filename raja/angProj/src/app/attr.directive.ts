import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){};
  @Input() msg;
  constructor() { }

  @HostListener('click')
  callMe(){
    console.log('im invoked');
    this.appAttr();
    console.log(this.msg);
  }
}
