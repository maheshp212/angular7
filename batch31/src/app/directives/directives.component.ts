import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'qshore';
  fruits = ['kiwi', 'melon', 'berry'];
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  callMe(){
    console.log(this.count);
    this.count++;
  }
}
