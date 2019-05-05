import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  fname:string = 'qhosre';
  age:number = 34;
  gender:boolean = true;
  interest:null = null;
  fruits = ['kwiwi', 'melon', 'berry']
  user = {name:'angular', exp:8};

a= 2;
b = 3;
  constructor() { }

  ngOnInit() {
  }

}
