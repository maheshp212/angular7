import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent implements OnInit {
  login:any = {};
  constructor() { }

  ngOnInit() {
  }

  callMe(){
    alert('invoked' + this.login.fname + '::' + this.login.lname);
  }

}
