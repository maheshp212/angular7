import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {
  users:any;
  userInfo: any;
  constructor(private user:UsersService) { }

  ngOnInit() {
    this.listUsers()
  }

  listUsers(){
    this.user.listUsers().subscribe((res:any)=>{
      this.users = res.data;
    },()=>{
      // failure case
    });
  }

  viewUser(id){
    this.user.viewUser(id).subscribe((res:any)=>{
      this.userInfo = res;
    },()=>{
      // failure case
    });
  }

  createUser(){
    this.user.createUser().subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    },()=>{
      // failure case
    });
  }

  editUser(id){
    this.user.editUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    },()=>{
      // failure case
    });
  }

  deleteUser(id){
    this.user.deleteUser(id).subscribe((res:any)=>{
      this.userInfo = res;
      this.listUsers()
    },()=>{
      // failure case
    });
  }

}
