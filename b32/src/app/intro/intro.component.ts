import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router'





interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];







@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  alerts: Alert[];

  user;
  user2;
  height = '100%';
  imageSources = [
    'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
    "https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg"
  ]

  constructor( private route:ActivatedRoute) { 
    this.reset();
  }

  ngOnInit() {
    this.user = {name:'qshore', tech:'angular', exp: 7}
    this.user2 = {name:'mahesh', tech:'java', exp: 10}
    this.route.params.subscribe((res)=>{
      console.log(res); 
    })


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

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
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
