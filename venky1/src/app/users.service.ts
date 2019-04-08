import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  listUsers(){
    return this.http.get('http://api.qshore.com/users');
  }

  addUser(){
    var userData = {
      fname:'venkyasdfdf',
      lname: 'venk',
      age:34,
      email:'venky@gmail.com',
      password:'123abc'
    };
    var url = 'http://api.qshore.com/add-user'
    return this.http.post(url, userData);
  }
}
