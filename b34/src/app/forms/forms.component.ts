  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
address:any;
email:any;
  constructor() { }

  ngOnInit() {
  }

  login(){
    alert('im invoked :: ' + this.address + '-' + this.email);
  }
}
