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
  userInfo:any;
  constructor(private user:UserService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers(){
    this.user.listUsers().subscribe( (res:any)=>{
      //success
      this.users = res.data;
    }, (err)=>{
      //failure
    })
  }

  viewUser(id){
    this.user.getUser(id).subscribe( (res:any)=>{
      //success
      this.userInfo = res;
    }, (err)=>{
      //failure
    })
  }

  editUser(id){
    this.user.editUser(id).subscribe( (res:any)=>{
      //success
      this.userInfo = res;
      this.listUsers();
    }, (err)=>{
      //failure
    })
  }

  deleteUser(id){
    this.user.deleteUser(id).subscribe( (res:any)=>{
      //success
      this.userInfo = res;
      this.listUsers();
    }, (err)=>{
      //failure
    })
  }

  createUser(){
    this.user.addUser().subscribe( (res:any)=>{
      //success
      this.userInfo = res;
      this.listUsers();
    }, (err)=>{
      //failure
    })
  }
}
