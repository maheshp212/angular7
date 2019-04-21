import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  listUser(){
    let url = 'http://api.qshore.com/users';
    return this.http.get(url);
  }

  viewUser(id){
    let url = 'http://api.qshore.com/view-user/' + id;
    return this.http.get(url);
  }

  addUser(){
    let url = 'http://api.qshore.com/add-user';
    var user = {
      fname: 'Mohan',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
    }
    return this.http.post(url,user);
  }

  editUser(id){
    let url = 'http://api.qshore.com/edit-user/'+id;
    var user = {
      fname: 'Mohan upd',
      lname:'Lal upd',
      age:23,
      email:'mohanlaupdl@123',
      password:'lal123'
    }
    return this.http.put(url,user);
  }

  deleteUser(id){
    let url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
}
