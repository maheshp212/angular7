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
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { CustomComponent } from './custom/custom.component';
import { ApisComponent } from './apis/apis.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [ // component , directive , pipe
    AppComponent, HomeComponent, IntroComponent, 
    VariablesComponent, DirectivesComponent, FormsComponent, ObjFormsComponent, PipesComponent, HexaPipe, ParamsPipe, CustomComponent, ApisComponent, LifeCycleComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
