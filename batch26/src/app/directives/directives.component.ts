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
imageSources:string[] = [
'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg'
]
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
