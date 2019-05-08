import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  listUsers(){
    let url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  getUser(id){
    let url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url);
  }

  addUser(){
    let url = 'http://api.qshore.com/add-user';
    let data =  {
      fname: 'Mohan',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
    }
    return this.http.post(url,data);
  }

  editUser(id){
    let url = 'http://api.qshore.com/edit-user/'+id;
    let user = {
      fname: 'Mohan update',
      lname:'Lal upd',
      age:23,
      email:'mohanla l upd@123',
      password:'lal123 upd'
    };
    return this.http.put(url, user);
  }

  deleteUser(id){
    let url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
}
