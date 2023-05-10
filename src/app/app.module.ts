import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { SingersComponent } from './shared/components/singers/singers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    SignupComponent,
    LoginComponent,
    SingersComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
