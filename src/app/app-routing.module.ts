import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

// https://angular.io/tutorial/tour-of-heroes/toh-pt5 to create routes navigation
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      FormsModule            
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
