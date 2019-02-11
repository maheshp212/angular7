import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.less']
})
export class VariablesComponent implements OnInit {

    a: number = 2;
		b: number = 3;
		fname: string = 'qshore';
		interest: null = null;
		gender:boolean = true;
		undf;
		fruits: string[] = ['kwiw', 'melon', 'berry'];
		user: any = {name:'angualr', exp: 5};
		
  constructor() { }

  ngOnInit() {
  }

}
