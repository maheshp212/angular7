import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  fname = 'QsHoRe';
  age = 34;
  day = new Date();
  user = {name:'angular', exp:8};
  constructor() { }

  ngOnInit() {
  }

}
