import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { AuthGuard } from './common/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  // {path:'login', component:LoginComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
