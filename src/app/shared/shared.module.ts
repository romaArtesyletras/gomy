import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

// https://www.pluralsight.com/guides/using-shared-modules-in-angular - to know how to create a shared behaviour
const componentsShared = [
  NavbarComponent
]
@NgModule({
  declarations: componentsShared,
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: componentsShared
})
export class SharedModule { }
