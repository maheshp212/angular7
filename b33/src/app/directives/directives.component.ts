import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  fname:string = 'qshore';
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {fname:'angular', exp:5};
  counter = 0;
  constructor() { }

  ngOnInit() {
  }


  callMe(){
    console.log(this.counter);
    this.counter++;
  }


  login(){
    console.log('this is custom logic from component')
  }

  
  sendDatas(inp){
    console.log(inp)
  }

  fetchItem(item) {
    alert(item);
  }

  sendUname(e){
    alert(e);
  }
}

