import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    let url = 'http://api.qshore.com/users';
    let url2 = 'http://newtel.in/mahesh';
    return this.http.get(url);
  }

  viewUser(id){
    let url = 'http://api.qshore.com/view-user/'+id;
    return this.http.get(url);
  }

  createUser(){
    var url = 'http://api.qshore.com/add-user';
    var data = {
      fname: 'ram',
      lname:'raj',
      age:23,
      email:'ramraj@123',
      password:'raj123'
    };
    
    return this.http.post(url,data);
  }

  editUser(id:number){
    var url = 'http://api.qshore.com/edit-user/'+id;
    var data = {
      fname: 'ram',
      lname:'goapl Varma',
      age:23,
      email:'ramGopal@123',
      password:'varma123'
    };
    
    return this.http.put(url,data);
  }


  deleteUser(id){
    var url = 'http://api.qshore.com/delete-user/'+id;
    return this.http.delete(url);
  }
}
