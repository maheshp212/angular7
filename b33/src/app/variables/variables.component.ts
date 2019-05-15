import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent {

  age:number = 34;
  fname:string = 'qhose';
  gender:boolean = true;
  interest:null = null;
  undf:any;
  fruits:string[] = ['kwii', 'melon', 'berry'];
  user:any = {name:'angular', exp:456};
  a:number = 2;
  b:number = 3;

  constructor() { }


}
