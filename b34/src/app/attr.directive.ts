import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  @Input() appAttr(){};
  @Input() msg;
  @Input() fname;

  @Output() sendData = new EventEmitter();


  constructor() {

    // load the directive on page load
    console.log('app Attribute on page load')
   }

   //load the directive on some event
   @HostListener('click')
   callMe(){
    //commmon logic
      console.log('app Attribute on event load')
      console.log(this.msg);
      console.log(this.fname);
      let name = this.msg + ' ' +this.fname;

      this.appAttr(); // running the page based logic

      //commonlogic
      this.sendData.emit(name);
   }

}
