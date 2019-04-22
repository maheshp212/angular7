import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ApisComponent } from './apis/apis.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'intro/:id/:fname', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'forms', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'pipes', component:PipesComponent},
  {path:'apis', component:ApisComponent},
  {path:'life-cycle', component:LifeCycleComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
