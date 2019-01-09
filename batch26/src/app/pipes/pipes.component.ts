import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
	age: number = 34;
	day:any = new Date();
	fname: string = 'QsHoRE';
  constructor() { }

  ngOnInit() {
  }

}
