import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  @Input() msg:string = '';

	fname:string = 'qShoRe';
	age:number = 34;
	today:any = new Date();
	user:any = {fname:'asdf', age:234}
  constructor() { }

  ngOnInit() {
  }

}
