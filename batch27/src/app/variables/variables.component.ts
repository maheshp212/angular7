import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

	// class members are scope variables
	// class members  = fields & methods

	fname:string = 'hello';
	age:number = 34;
	fruits = ['kiwi', 'asdff', 'asdf']
	interest = null
	gender = true
	undf
	user = {name:'angular', exp:9}
	a:number = 2;
	b:number = 3;

  constructor() { }

  ngOnInit() {
  }

}
