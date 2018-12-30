import { Component, OnInit, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit,
							 AfterContentChecked, AfterViewInit,
							  AfterViewChecked, OnDestroy {

fname:string;
  constructor() { }

  ngOnInit() {
  	console.log('ngOnInit')
  }

  ngOnDestroy(){
  	console.log('ngOnDestroy')
  }


  ngAfterViewInit(){
  	console.log('ngAfterViewInit')
  }

  ngAfterContentInit(){
  	console.log('ngAfterContentInit')
  }


  //dont use the below functions in real time
  ngDoCheck(){
  	console.log('ngDoCheck')
  }
  ngAfterViewChecked(){
  	console.log('ngAfterViewChecked')
  }
  ngAfterContentChecked(){
  	console.log('ngAfterContentChecked')
  }
}
