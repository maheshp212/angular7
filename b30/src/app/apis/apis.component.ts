import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.less'],
  providers: [UsersService]
})
export class ApisComponent implements OnInit {
  private usersList:any;
  private usersInfo:any;
  constructor(private users:UsersService) { }

  ngOnInit() {
    this.listUsers();
  }
  
  listUsers(){
    this.users.listUsers().subscribe((res:any)=>{
      //success
      this.usersList = res.data;
      console.log(this.usersList);
    }, (res:any)=>{
      //failure
    })
  }

  viewUser(id){
    this.users.viewUser(id).subscribe((res:any)=>{
      //success
      this.usersInfo = res;
    }, (res:any)=>{
      //failure
    });
  }

  editUser(id){
    this.users.editUser(id).subscribe((res:any)=>{
      //success
      this.usersInfo = res;
      this.listUsers();
    }, (res:any)=>{
      //failure
    });
  }

  deleteUser(id){
    this.users.deleteUser(id).subscribe((res:any)=>{
      //success
      this.usersInfo = res;
      this.listUsers();
    }, (res:any)=>{
      //failure
    });
  }

  createUser(){
    this.users.createUser().subscribe((res:any)=>{
      //success
      this.usersInfo = res;
      this.listUsers();
    }, (res:any)=>{
      //failure
    });
  }

}
