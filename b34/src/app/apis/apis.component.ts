import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {

  listUsers:any;
  userInfo: any;
  constructor(private users:UsersService) { }

  ngOnInit() {

    this.fetchUsersList();
  }

  fetchUsersList(){
    this.users.listUsers().subscribe((res: any)=>{
      console.log(res)
      this.listUsers = res.data;
    }, ()=>{
      alert('api got failed')
    })
  }

  viewUser(id){
    this.users.viewUser(id).subscribe((res)=>{
      this.userInfo = res;
    },()=>{

    })
  }

  createApiUser(){
    this.users.createUser().subscribe((res)=>{
      this.userInfo = res;
      this.fetchUsersList();
    },()=>{

    })
  }

  editUser(id){
    this.users. editUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.fetchUsersList();
    },()=>{

    })
  }

  deleteAPiUser(id){
    this.users. deleteUser(id).subscribe((res)=>{
      this.userInfo = res;
      this.fetchUsersList();
    },()=>{

    })
  }
}
