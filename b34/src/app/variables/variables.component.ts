import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  age:number = 34;
  fname:string = 'hello';
  gender:boolean = true;
  interest:null = null;
  fruits : string[] = ['kiwi', 'melon', 'berry'];
  undf:any;
  user:any = {name:'angular', exp:456};

  a=2;
  b=3;
  constructor() { }

  ngOnInit() {
  }

}
