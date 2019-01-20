import { Component, OnInit, DoCheck, AfterContentChecked, 
	AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentChecked, 
	AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }
  /**
  onInit
  docheck
  aftercontentinit
  aftercontent checked
  afterviewinit
  afterviewchecked
  ondestroy
  */
  
  fname:string
  ngOnInit() {
  	console.log('ngOnint');
  }

  ngOnDestroy(){
console.log('ngOnDestroy');
  }

  ngDoCheck(){
console.log('ngDoCheck');
  }

  ngAfterViewInit(){
console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(){
console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(){
console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(){
console.log('ngAfterViewChecked');
  }


}
