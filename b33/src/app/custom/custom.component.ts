import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input() user:any;
  @Input() list:any;
  index:any;

  @Output() fetchListItem = new EventEmitter();
@Output() sendUname = new EventEmitter();
  constructor() { }

  
  ngOnInit() {
  }

  fetch(){
    if(this.index && this.index <= this.list.length){
      let item = this.list[this.index];
      this.fetchListItem.emit(item);
    } else {
      alert('pelase enter a valid index')
    }
  }

  uname(){
   this.sendUname.emit(this.user.fname)
  }
}
