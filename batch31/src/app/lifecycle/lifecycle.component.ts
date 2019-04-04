import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
  fname: any;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit ...')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy ...')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit ...')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit ...')
  }


// dont use the below functions
  ngDoCheck(){
    console.log('ngDoCheck ...')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked ...')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked ...')
  }

}
