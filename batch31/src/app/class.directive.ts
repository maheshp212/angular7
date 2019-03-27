import { Directive, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective implements OnInit{

  @Output() getData = new EventEmitter();

  constructor() {}

  ngOnInit(){
    console.log('hello this is class directive');
    this.getData.emit('qshore************');
    console.log('hwasdfasdf');
  }


}
