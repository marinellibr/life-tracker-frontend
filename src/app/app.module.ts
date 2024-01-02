import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarDefaultValue } from './models/calendar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CheckinComponent,
    DashboardComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [
    CalendarDefaultValue
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
