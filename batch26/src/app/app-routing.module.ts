import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormStatesComponent } from './form-states/form-states.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
	{path:'home', component:HomeComponent},
	{path:'intro', component:IntroComponent},
	{path:'variables', component:VariablesComponent},
	{path:'directives', component:DirectivesComponent},
	{path:'form-states', component:FormStatesComponent},
	{path:'obj-forms', component:ObjFormsComponent},
	{path:'pipe', component:PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
