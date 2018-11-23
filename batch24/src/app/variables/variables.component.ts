import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent  {
	fname:string = 'hello';
	age = 34;
	gender:boolean = true;
	interest:null = null;
	fruits:string[] = ['kiwi', 'melon', 'asdf'];
	user = {age:34, exp:5};
	undf;

	a=2;
	b=3;
  constructor() { }

}
