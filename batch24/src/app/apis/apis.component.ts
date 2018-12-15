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
	this.user.listUsers().subscribe((res:any) => {
  		this.users = res.data;
  	}, (res)=>{
  		console.log(res);
  	})
}
 viewUser(id){
 	this.user.viewUser(id).subscribe((res:any) => {
  		this.userInfo = res;
  	}, (res)=>{
  		console.log(res);
  	})
 }
 
 eidtUser(id){
 	this.user.eidtUser(id).subscribe((res:any) => {
  		this.userInfo = res;
  		this.listUsers();
  	}, (res)=>{
  		console.log(res);
  	})
 }
 deleteUser(id){
 	this.user.deleteUser(id).subscribe((res:any) => {
  		this.userInfo = res;
  		this.listUsers();
  	}, (res)=>{
  		console.log(res);
  	})
 }
addUser(){
	this.user.addUser().subscribe((res:any) => {
  		this.userInfo = res;
  		this.listUsers();
  	}, (res)=>{
  		console.log(res);
  	})
}
}
