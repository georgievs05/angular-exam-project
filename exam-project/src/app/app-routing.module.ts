import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { SmthWentWrongComponent } from './smth-went-wrong/smth-went-wrong.component';

const routes: Routes = [{path:'', pathMatch:'full', redirectTo:'/home'},
{path:'home', component: HomeComponent},
{path:'smthwentwrong', component:SmthWentWrongComponent},
{path:'**', redirectTo:'/404'},
{path:'404', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
