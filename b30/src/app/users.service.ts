import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    let url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  viewUser(id){
    var url = 'http://api.qshore.com/view-user/' + id; 
    return this.http.get(url);
  }
  createUser(){
    var url = 'http://api.qshore.com/add-user';
		var user = {
			fname: 'Bhargav',
			lname: 'Reddy Vanga',
			age:24,
			email:'vanga@gmail.com',
			password:'reddy123'
		};return this.http.post(url, user);
  }
  
  editUser(uid){
    var url = 'http://api.qshore.com/edit-user/' + uid;
		var user = {
			fname: 'shadeep',
			lname: 'Reddy ',
			age:24,
			email:'vanga@gmail.com',
			password:'shadeep123'
    };
    return this.http.put(url, user);
  }

  deleteUser(uid){
    var url = 'http://api.qshore.com/delete-user/' + uid;
		return this.http.delete(url);
  }
}
