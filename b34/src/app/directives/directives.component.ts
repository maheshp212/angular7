import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  
  fname='qshores';
  fruits : string[] = ['kiwi', 'melon', 'berry'];
  counter:number = 0;

  constructor() { }

  ngOnInit() {
  }

  getColorCode(){
    return 'green';
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }
}


