import { Directive } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective {

  constructor() {
    console.log('hello im class directive got invoked');
   }

}
