import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  fname = 'QsHoRe';
  num = 34;
  date = new Date();
  user:any = {name:'angular', exp:456};

  constructor() { }

  ngOnInit() {
  }

}
