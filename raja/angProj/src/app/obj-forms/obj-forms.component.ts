import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent implements OnInit {
  user:any = {}
  @Output() sendData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  
  login(){
    //alert(this.user.fname + this.user.lname);
    this.sendData.emit(this.user)
  }
}

