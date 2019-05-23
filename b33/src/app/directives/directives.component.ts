import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  fname:string = 'qshore';
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {fname:'angular', exp:5};
  counter = 0;



  userHeaders:any = [
    {name: 'First Name', key:'fname'},
    {name: 'Last Name', key:'lname'},
    {name: 'Email', key:'email'},
    {name: 'Passsword', key:'pwd'},
    {name: 'Phone', key:'phone'},
  ];

  users:any = [
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'tyugnh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'asdf', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'msdafsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'rtyurtuh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'vcbsd', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'dftyery', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
    {fname:'maehsh', lname:'perla', email:'mahesh@gmail.com', pwd:'123abc', phone:'1234'},
  ];

  carHeaders: any = [
    {name: ' Name', key:'name'},
    {name: 'Model', key:'model'},
    {name: 'Brand', key:'brand'},
  ]

  cars:any = [
    {name:'dezire', model:'switf', brand:'maruit'},
    {name:'dezire', model:'switf', brand:'maruit'},
    {name:'asdf', model:'switf', brand:'maruit'},
    {name:'dezire', model:'switf', brand:'maruit'},
    {name:'deziasdfasdre', model:'switf', brand:'maruit'},
    {name:'zxvfger', model:'switf', brand:'maruit'},
    {name:'sdfsde', model:'switf', brand:'maruit'},
    {name:'deziasdfasdre', model:'switf', brand:'maruit'},
    {name:'deziasdfasdre', model:'switf', brand:'maruit'},
    {name:'dez343245234ire', model:'switf', brand:'maruit'},
  ]

  animalHeaders: any = [
    {name: ' Name', key:'name'},
    {name: 'Type', key:'type'},
  ];

animals:any = [
  {name:'cow', type:'herbivore'},
  {name:'asdf', type:'herbivore'},
  {name:'coasdfw', type:'herbivore'},
  {name:'coafw', type:'herbivore'},
  {name:'coqwrqwerw', type:'herbivore'},
]

  constructor() { }

  ngOnInit() {
  }


  callMe(){
    console.log(this.counter);
    this.counter++;
  }


  login(){
    console.log('this is custom logic from component')
  }

  
  sendDatas(inp){
    console.log(inp)
  }

  fetchItem(item) {
    alert(item);
  }

  sendUname(e){
    alert(e);
  }
}

