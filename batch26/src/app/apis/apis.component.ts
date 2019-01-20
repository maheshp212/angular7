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
	userInfo:any;
  constructor(private user:UsersService) { }

  ngOnInit() {
  	this.listUsers();
  }

  listUsers(){

  	this.user.listUsers().subscribe((res:any)=> {
  		this.users = res.data;
  	});
  }

  viewUser(id:any){
	this.user.viewUser(id).subscribe((res:any)=>{
  		this.userInfo = res.data;
  	}, ()=>{

  	});
  }

  createUser(){
	this.user.createUser().subscribe((res)=>{
  		this.userInfo = res.data;
  		this.listUsers();
  	}, ()=>{

  	});
  }

  editUser(id){
	this.user.eidtUser(id).subscribe((res:any)=>{
  		this.userInfo = res.data;
  		this.listUsers();
  	}, ()=>{

  	});
  }

  deleteUser(id){
	this.user.deleteUser(id).subscribe((res:any)=>{
  		this.userInfo = res.data;
  		this.listUsers();
  	}, ()=>{

  	});
  }
}
