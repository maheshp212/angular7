import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.component.html',
  styleUrls: ['./pg1.component.scss']
})
export class Pg1Component implements OnInit {
userData:any = {}
  constructor(private routeparams:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.routeparams.params.subscribe((res:any)=>{
      this.userData.fname = res.fname
      this.userData.age = res.age
    })
  }

  goBack(){

      this.router.navigate(['frm1'])
  }

}
