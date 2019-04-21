import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service'
@Component({
  selector: 'app-webapi',
  templateUrl: './webapi.component.html',
  styleUrls: ['./webapi.component.scss']
})
export class WebapiComponent implements OnInit {

  constructor(private user:UserService) { }
usersList: any;
userInfo: any
  ngOnInit() {
    this.listUsers();
  }

  listUsers(){
    this.user.listUser().subscribe( (res:any)=>{
      this.usersList = res.data
    },(err)=>{
      
    });
  }

  viewUser(id){
    this.user.viewUser(id).subscribe((res)=>{
      this.userInfo = res;
    }) 
  }
  createUser(){
    this.user.addUser().subscribe((res)=>{
      this.listUsers();
    },(err) => {
      //failur
    })
  }
  editUser(id){
    this.user.editUser(id).subscribe((res)=>{
      this.listUsers();
    },(err) => {
      //failur
    })
  }
  deleteUser(id){
    this.user.deleteUser(id).subscribe((res)=>{
      this.listUsers();
    },(err) => {
      //failur
    })

  }

}
