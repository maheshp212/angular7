import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
  	this.routes.params.subscribe((res)=>{
  		console.log(res);
  	})
  }

}
