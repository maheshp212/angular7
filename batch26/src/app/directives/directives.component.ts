import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
	fname:string = 'qshore';
	fruits:string[] = ['kiwi', 'mango', 'banana'];
	counter:number = 0;

  constructor() { }

  ngOnInit() {
  }
  callMe(){
  	console.log(this.counter);
  	this.counter++;

  }

  login(){
    console.log('component specific business logic for the custom direcitve')
  }

  fetchfromdir(event){
    console.log(event);
  }

  getSqrt(op){
    alert('sqrt :::: ' + op );
  }

  getSquare(num){
    alert('square :::: ' + num );
  }
}
