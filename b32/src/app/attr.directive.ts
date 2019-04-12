import { Directive, Input,Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {
  @Input() appAttr;
  @Input() msg;
  @Input() fname;

  @Output() combined= new EventEmitter();
  constructor() { }

  @HostListener('dblclick')
  callMe(){
    alert(this.msg);
    alert(this.fname);
    var res = this.msg + this.fname;

    this.combined.emit(res);
  }

}
