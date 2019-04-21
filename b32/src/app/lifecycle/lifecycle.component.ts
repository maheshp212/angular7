import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
  
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  //do not use the below methods
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  
  //do not use the below methods
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  //do not use the below methods
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

}
