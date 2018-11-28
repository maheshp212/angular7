import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

	fname:string = 'qShoRe';
	age:number = 34;
	today:any = new Date();
	user:any = {fname:'asdf', age:234}
  constructor() { }

  ngOnInit() {
  }

}
