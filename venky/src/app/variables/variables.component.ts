import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  fname:string = 'qshore';
  age:number = 34;
  interest:boolean = true;
  gender:null = null;
  fruits:string[] = ['kiwi', 'orane', 'melong'];
  user = {name:'angular', tech:'js', exp:45};
  undf;


  a=2;
  b=3;

  constructor() { }

  ngOnInit() {
  }

}
