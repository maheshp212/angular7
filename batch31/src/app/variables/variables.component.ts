import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  fname = 'qshore';
  age = 34;
  gender = true;
  interest = null;
  fruits = ['kiwi', 'melon', 'berry'];
  user = {name:'anguglar' , exp: 10};
  undf;

  a = 2;
  b =3

  constructor() { }

  ngOnInit() {
  }

}
