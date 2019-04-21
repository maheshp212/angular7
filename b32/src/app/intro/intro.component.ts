import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
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

    let ober = new Observable((observer)=>{
      setTimeout(() => {
        
        observer.next("done...");
        observer.complete();
      }, 3000);
    })

    ober.subscribe(function(res){
        console.log(res);
    },()=>{

    })
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
