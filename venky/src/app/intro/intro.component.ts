import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
showBtn1= false;
showBtn2= false;
  ngOnInit() {

    this.route.params.subscribe((res)=>{
      console.log(res);
    })
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
