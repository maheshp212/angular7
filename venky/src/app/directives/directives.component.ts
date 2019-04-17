import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'qshore';
  age:number = 34;
  fruits:string[] = ['kiwi', 'orane', 'melong'];
  showBtn1 = false;
  showFissoBtn = false;
  count =0;

  constructor() { }

  ngOnInit() {
  }

  enableBtn1(){
    this.showBtn1 = true;
  }

  enableFisso(){
    this.showFissoBtn = true;
  }


  callMe(){
    console.log(this.count);
    this.count++;
  }

}
