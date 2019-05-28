import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss'],
  providers: [UserService]
})
export class ApisComponent implements OnInit {
  users:any;
  usersInfo: any;

  constructor(private user:UserService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers(){
    this.user.listUsers().subscribe((res:any)=>{
      this.users = res.data
    },()=>{
      //failure
    })
  }

  viewUser(id){
    this.user.viewUser(id).subscribe((res:any)=>{
      this.usersInfo = res;
    },()=>{
      //failure
    })
  }

  editUser(id){
    this.user.editUser(id).subscribe((res)=>{
      this.usersInfo = res;
      this.listUsers();
    },()=>{

    })
  }

  deleteUser(id){
    this.user.deleteUser(id).subscribe((res)=>{
      this.usersInfo = res;
      this.listUsers();
    },()=>{

    })

  }

  createUser(){
    this.user.createUser().subscribe((res)=>{
      this.usersInfo = res;
      this.listUsers();
    },()=>{

    })

  }


}
