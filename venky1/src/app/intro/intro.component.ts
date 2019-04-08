import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  age = 34;
  fname = 'qshore';
  listUsers;
  
  constructor(private users: UsersService) { }

  ngOnInit() { 
    this.users.listUsers().subscribe((res: any)=>{
      console.log(res);
      this.listUsers = res.data;
    })
  }

  createUser(){
    this.users.addUser().subscribe((res)=>{
      console.log(res);
      this.users.listUsers().subscribe((res: any)=>{
        console.log(res);
        this.listUsers = res.data;
      })
    })
  }

}
