import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UserService]
})
export class ApisComponent implements OnInit {
  users:any
  constructor(private user:UserService) { }

  ngOnInit() {
    this.user.listUsers().subscribe((res:any)=>{
      //success

      this.users = res.data
    },()=>{
      //failure
    })
  }


}
