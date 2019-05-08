import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ApisComponent } from './apis/apis.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'dir', component:DirectivesComponent},
  {path:'forms', component:FormsComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life-cycle', component:LifecycleComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'apis', component:ApisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
