import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParamDirective } from './param.directive';
import { HexaPipe } from './hexa.pipe';
import {UsersService} from './users.service';

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [ // components , directives, pipes
    AppComponent,
    HomeComponent,
    ParamDirective,
    HexaPipe,
    IntroComponent,
    DirectivesComponent,
    FormsComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
