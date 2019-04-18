import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname = 'VenKY';
  age = 45;
  day = new Date();
  user = {name:'anguar' , exp:8};
  constructor() { }

  ngOnInit() {
  }

}
