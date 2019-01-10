import { Directive,Input, OnInit } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective implements OnInit{
@Input() msg;
@Input() fname;
  constructor() { 

  }

  ngOnInit(){
  	  	console.log('class custom directive');

    console.log(this.msg)
    console.log(this.fname)

  }

}
