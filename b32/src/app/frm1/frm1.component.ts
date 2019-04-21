import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-frm1',
  templateUrl: './frm1.component.html',
  styleUrls: ['./frm1.component.scss']
})
export class Frm1Component implements OnInit {
  fname:string;
  age;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  reg(){

      this.route.navigate(['pg1', this.fname, this.age])

  }
}
