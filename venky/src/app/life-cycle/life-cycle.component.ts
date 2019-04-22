import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

  constructor() { }
  fname:string;
  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  // dont user this method
  ngDoCheck(){
    console.log('ngDoCheck');
  }

  // dont user this method
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  
  // dont user this method
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
