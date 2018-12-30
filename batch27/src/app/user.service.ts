import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http:HttpClient) { }

	listUsers(){
		return this.http.get('http://api.qshore.com/users');
	}

	viewUser(id){
		var url = 'http://api.qshore.com/view-user/'+id;
		return this.http.get(url);
	}
	
	addUser(){
		var url = 'http://api.qshore.com/add-user';
		var data = {
			fname: 'Qshore',
			lname:'Tech',
			age:23,
			email:'mohanlal@123',
			password:'lal123'
		};
		return this.http.post(url, data);
	}

	editUser(id){
		var url = 'http://api.qshore.com/edit-user/'+id;
		var data = {
			fname: 'Qshore upd',
			lname:'Tech',
			age:23,
			email:'updd@123',
			password:'upd123'
		};

		return this.http.put(url, data);
	}

	deleteUser(id){
		var url = 'http://api.qshore.com/delete-user/'+id;
		return this.http.delete(url);
	}
}
