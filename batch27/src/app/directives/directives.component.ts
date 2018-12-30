import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

	fname= 'qshore';
	fruits = ['kiwi', 'melong', 'berry']
	count = 0;
  constructor() { }

  ngOnInit() {
  }
  callMe(){
  	console.log(this.count);
  	this.count++;
  }


  login(){
    console.log('directives logic form component')
  }
  outputEvent(a){
    console.log(a);
  }
}
