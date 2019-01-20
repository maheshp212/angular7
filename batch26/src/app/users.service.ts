import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  listUsers(){
  	let url: string = 'http://api.qshore.com/users';
  	return this.http.get(url); 
  }

  viewUser(id:any){
  	let url: string = 'http://api.qshore.com/view-user/'+id;
  	return this.http.get(url); 
  }


	createUser(){
  	let url: string = 'http://api.qshore.com/add-user';
  	let data: any = {
  		fname: 'Mohan',
		lname:'Lal',
		age:23,
		email:'mohanlal@123',
		password:'lal123'

  	}
  	return this.http.post(url, data); 
  }

  eidtUser(id:any){
  	let url: string = 'http://api.qshore.com/edit-user/'+id;
  	let data: any = {
  		fname: 'qshore',
		lname:'update',
		age:2334,
		email:'upd@123',
		password:'upd123'

  	}
  	return this.http.put(url, data); 
  }
  deleteUser(id:any){
  	let url: string = 'http://api.qshore.com/delete-user/'+id;
  	return this.http.delete(url); 
  }
}
