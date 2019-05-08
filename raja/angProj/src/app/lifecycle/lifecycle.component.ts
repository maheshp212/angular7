import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  /*
  
  --sequence of life cycle methods
  OnInit
  DoCheck
  AfterContentInit
  AfterContentChecked
  AfterViewInit
  AfterViewChecked
  OnDestroy

  */

  fname:string;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }

  //dont use 
  ngDoCheck(){
    console.log('ngDoCheck')
  }

  //dont use 
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  //dont use 
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
}
