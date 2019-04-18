import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }
showBtn1= false;
showBtn2= false;
  ngOnInit() {
  }

  enableButtons1(){
    this.showBtn1 = true
    this.showBtn2 = false
  }

  enableButtons2(){
    this.showBtn2 = true
    this.showBtn1 = false
  }
}
