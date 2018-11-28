import { Component, OnInit, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, 
 AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked,OnDestroy {
	fname="qshore";
  constructor() { }

  ngOnInit() {
  	console.log('ngOnInit');
  }
  ngOnDestroy(){
console.log('ngOnDestroy');
  }
  ngAfterViewInit(){
console.log('ngAfterViewInit');
  }
  ngAfterContentInit(){
console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){ // dont use
console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(){// dont use
console.log('ngAfterViewChecked');
  }
  ngDoCheck(){// dont use
console.log('ngDoCheck');
  }

}
