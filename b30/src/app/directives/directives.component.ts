import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.less']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'qshorex';
  fruits: string[] = ['kiwi', 'melon', 'berry'];
  count:number = 0;
  constructor() { }

  ngOnInit() {
  }

  callMe(){
    console.log(this.count);
    this.count++;
  }
  customLogic(){
    console.log('directive custom logic depends on component')
  }
}

