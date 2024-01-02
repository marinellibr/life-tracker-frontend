import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckinComponent } from './components/checkin/checkin.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  // {path: "login", component: LoginComponent},
  // {path: "signup", component: SignupComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "checkin", component: CheckinComponent},
  {path: "**", pathMatch: "full", redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
