import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  age:number = 34;
  fname:string = 'qshore';
  gender:boolean = true;
  iterest:null = null;
  fruits:string[] = ['34', 'asdf', 'kiwi'];
  user:any = {exp: 34, name:'angular'};
  undf;

  a = 2;
  b = 3;
  constructor() { }

  ngOnInit() {
  }

}
