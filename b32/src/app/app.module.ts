import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {SlideshowModule} from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { OutputComponent } from './output/output.component';
import { ApisComponent } from './apis/apis.component';
import {UserService} from './user.service';
import { WebapiComponent } from './webapi/webapi.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NotfondComponent } from './notfond/notfond.component';
import { Frm1Component } from './frm1/frm1.component';
import { Pg1Component } from './pg1/pg1.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormsComponent,
    ObjFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    AttrDirective,
    ClassDirective,
    OutputComponent,
    ApisComponent,
    WebapiComponent,
    LifecycleComponent,
    NotfondComponent,
    Frm1Component,
    Pg1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    SlideshowModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
