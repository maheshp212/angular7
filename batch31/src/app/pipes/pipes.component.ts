import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  // uppercase
  // lowercase
  // currency
  // number
  // date
  // json

  qshore = 'TeCh'
  rupee = 45;
  today = new Date();
  obj = {qshore: 'tech', today:'monday'};

  constructor() { }

  ngOnInit() {
  }

}
