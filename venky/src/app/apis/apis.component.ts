import { Component, OnInit } from '@angular/core';
import {UsersService} from './../users.service'
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  listUsers:any;
  constructor(private user: UsersService) { }
/**
 
function(){

}

() => {
  
}
  
 */
  ngOnInit() {
    this.user.listUsers().subscribe((res: any)=>{
      console.log(res);
      this.listUsers = res.data;

    })
  }

}
