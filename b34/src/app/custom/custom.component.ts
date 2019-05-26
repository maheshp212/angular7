import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() obj:any;
  @Input() arr:any;

  @Output() getArrValue = new EventEmitter();

  index;
  constructor() { }

  ngOnInit() {
  }

  arrayValue(){
    if(this.index>=0 && this.index <= this.arr.length){
      let val = this.arr[this.index];
      this.getArrValue.emit(val)
    }else {
      alert('please enter valid index') 
    }
  }

}
