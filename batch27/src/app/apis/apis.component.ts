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
	constructor(private user: UserService) { }

	ngOnInit() {
		this.listUsers();
	}
	listUsers(){
		this.user.listUsers().subscribe((res:any) => {
			console.log(res);
			this.users = res.data;
		}, ()=>{

		})
	}

	viewUser(id){
		this.user.viewUser(id).subscribe((res:any) => {
			console.log(res);
			this.userInfo = res.data;
		}, ()=>{

		})	
	}

	createUser(id){
		this.user.addUser().subscribe((res:any) => {
			console.log(res);
			this.userInfo = res.data;
			this.listUsers();
		}, ()=>{

		})	
	}
	editUser(id){
		this.user.editUser(id).subscribe((res:any) => {
			console.log(res);
			this.userInfo = res.data;
			this.listUsers();
		}, ()=>{

		})	
	}
	deleteUser(id){
		this.user.deleteUser(id).subscribe((res:any) => {
			console.log(res);
			this.userInfo = res.data;
			this.listUsers();
		}, ()=>{

		})	
	}

}
