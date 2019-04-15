import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // component , directive , pipe
    AppComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
