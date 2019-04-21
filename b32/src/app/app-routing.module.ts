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
import { WebapiComponent } from './webapi/webapi.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NotfondComponent } from './notfond/notfond.component';
import { Frm1Component } from './frm1/frm1.component';
import { Pg1Component } from './pg1/pg1.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'intro/:namessssssssss/:age/p/:itemId', component: IntroComponent},
  {path:'vari', component: VariablesComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'forms', component: FormsComponent},
  {path:'obj-forms', component: ObjFormsComponent},
  {path:'pipes', component: PipesComponent},
  {path:'api', component: WebapiComponent},
  {path:'life-cycle', component: LifecycleComponent},
  {path:'view-user/:id', component: LifecycleComponent},
  {path:'frm1', component: Frm1Component},
  {path:'pg1/:fname/:age', component: Pg1Component},
  {path:'**', component: NotfondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
