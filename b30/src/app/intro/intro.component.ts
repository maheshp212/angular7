import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
params:any
  ngOnInit() {
    this.route.params.subscribe((x)=>{
      console.log(x);
      this.params.id = x.id;
    })
  }

}
