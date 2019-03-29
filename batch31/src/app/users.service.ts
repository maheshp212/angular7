import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    var url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  viewUser(id){
    var url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url);
  }
  createUser(){
    var user = {
      fname: 'Mohan22',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
  };
  var apiUrl = 'http://api.qshore.com/add-user';
    return this.http.post(apiUrl, user);
  }
  editUser(id){
    var data = {
      fname: 'qshore',
      lname:'upd',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
  };
  var url = 'http://api.qshore.com/edit-user/'+id;
 
    return this.http.put(url,data);
  }
  deleteUser(id){
    var url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
 }
