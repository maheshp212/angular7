import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.less']
})
export class ObjFormsComponent implements OnInit {
  user:any = {};
  constructor() { }

  ngOnInit() {
  }
  login(f, fname, lname){
    console.log(f.submitted);
    console.log(fname);

    console.log(lname);
    console.log(fname.hasError('required'));

    if(f.submitted && fname.hasError('required')){
      alert('this is a mandatory feild');
    }
    if(f.submitted && fname.hasError('minlength')){
      alert(' Please enter min 5 chars');
    }
    if(f.submitted && fname.hasError('pattern')){
      alert('Please enter a valid pattern input');
    }

    //alert('asdf');
  }
}
