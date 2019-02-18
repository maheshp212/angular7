import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.less']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  fname = "";
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  // never use the below functions
  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }


}
