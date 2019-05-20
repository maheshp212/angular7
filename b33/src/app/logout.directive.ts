import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective {

  @Input()  appLogout;
  constructor() {
    console.log(this.appLogout);
   }


  @HostListener('click')
  logout(){
    console.log(this.appLogout);
  }
}
