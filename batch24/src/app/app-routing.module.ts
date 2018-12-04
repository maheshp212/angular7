import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventsComponent } from './events/events.component';
import { StatesComponent } from './states/states.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApisComponent } from './apis/apis.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

{path:'', component:HomeComponent},
{path:'intro/:fname/:age', component:IntroComponent},
{path:'variables', component:VariablesComponent},
{path:'directives', component:DirectiveComponent},
{path:'events', component:EventsComponent},
{path:'form-states', component:StatesComponent},
{path:'obj-forms', component:ObjFormsComponent},
{path:'pipes', component:PipesComponent},
{path:'life-cycle', component:LifeCycleComponent},
{path:'apis', component:ApisComponent},
{path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
