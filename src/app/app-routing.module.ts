import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  // {path: "login", component: LoginComponent},
  // {path: "signup", component: SignupComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'checkin', component: CheckinComponent, canActivate: [authGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
