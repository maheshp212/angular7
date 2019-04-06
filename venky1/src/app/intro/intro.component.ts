import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  age = 34;
  fname = 'qshore';
  
  constructor() { }

  ngOnInit() {
  }

}
