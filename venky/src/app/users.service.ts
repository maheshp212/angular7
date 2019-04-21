import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /*
  Create (POST)
  Read (GET)
  Update (PUT)
  Delete (DELETE)
  */
  constructor(private httpClient:HttpClient) { }

  listUsers(){
    var url = 'http://api.qshore.com/users';
    return this.httpClient.get(url);
  }
  viewUser(id){
    var url = 'http://api.qshore.com/view-user/'+id;
    return this.httpClient.get(url);
  }
  createUser(){
    var url = 'http://api.qshore.com/add-user';
    var user = {
      fname: 'Mohan',
      lname:'Lal',
      age:23,
      email:'mohanlal@123',
      password:'lal123'
    }
    return this.httpClient.post(url, user);
  }

  editUser(id){
    var url = 'http://api.qshore.com/edit-user/'+id;
    var user = {
      fname: 'Mohan upd',
      lname:'Lal upd',
      age:23,
      email:'mohanlaupdl@123',
      password:'lal123upd'
    }
    return this.httpClient.put(url, user);
  }

  deleteUser(id){
    var url = 'http://api.qshore.com/delete-user/'+id;
    return this.httpClient.delete(url);
  }

}
