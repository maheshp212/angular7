import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }
  user;
  user2;
  ngOnInit() {
    this.user = {name:'qshore', tech:'angular', exp: 7}
    this.user2 = {name:'mahesh', tech:'java', exp: 10}
  }

  getName(n){
    alert(n);
  }
  
  getTech(n){
    alert(n);
  }

  getExperince(n){
    alert(n);
  }
}
