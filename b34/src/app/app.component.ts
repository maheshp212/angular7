import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'b34';

  users = [
    {name:'rakesjh', age:56},
    {name:'sueresh', age:46},
    {name:'mukesh', age:26},
  ]
}
