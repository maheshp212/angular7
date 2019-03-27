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

  login(){
    console.log(' this is a custom directive logic from component');
  }
  getFname(fname){
    console.log(fname);

  }
  getData(name){
    console.log('asdfasdfasdfasdf');
    console.log(name);
  }

}
