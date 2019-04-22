import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  listUsers:any;
  userInfo:any;
  constructor(private user: UsersService) { }
/**
 
function(){

}

() => {
  
}
  
 */
  ngOnInit() {
   this.listUsersAPI() 
  }


  listUsersAPI(){
    this.user.listUsers().subscribe((res: any)=>{
      console.log(res);
      this.listUsers = res.data;

    })
  }
  viewUser(id){
    this.user.viewUser(id).subscribe((res)=>{
      console.log(res);
      this.userInfo = res;
    })
  }

  createUser(){
    this.user.createUser().subscribe((res)=>{
      console.log(res);
      this.userInfo = res;
      //calling the list api to update the  table
      this.listUsersAPI();

    })
  }

  editUser(id) {
    this.user.editUser(id).subscribe((res)=>{
      console.log(res);
      this.userInfo = res;
      //calling the list api to update the  table
      this.listUsersAPI();

    })
  }

  deleteUser(id) {
    this.user.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.userInfo = res;
      //calling the list api to update the  table
      this.listUsersAPI();

    })
  }
}
