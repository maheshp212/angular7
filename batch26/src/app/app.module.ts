import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormStatesComponent } from './form-states/form-states.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe, Params2Pipe } from './params.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { OutputNestedComponent } from './output-nested/output-nested.component';
import { ApisComponent } from './apis/apis.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    FormStatesComponent,
    ObjFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    Params2Pipe,
    AttrDirective,
    ClassDirective,
    OutputNestedComponent,
    ApisComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
