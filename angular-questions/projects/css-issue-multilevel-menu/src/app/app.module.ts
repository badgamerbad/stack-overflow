import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { CourseComponent } from './course/course.component';
import { AngularComponent } from './course/angular/angular.component';
import { ReactComponent } from './course/react/react.component';
import { AppRoutingModule } from './app.routing.module';
import { SubmenuComponent } from './submenu/submenu.component';
import { InstituteComponent } from './institute/institute.component';
import { MedicalComponent } from './institute/medical/medical.component';
import { CertificationComponent } from './institute/certification/certification.component';
import { AngularjsComponent } from './course/angular/angularjs/angularjs.component';
import { AngularPlusComponent } from './course/angular/angularplus/angularplus.component';
import { AngularnineComponent } from './course/angular/angularplus/angularnine/angularnine.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,MatIconModule,BrowserAnimationsModule],
  declarations: [ AppComponent, LocationComponent, CourseComponent, AngularComponent, ReactComponent, SubmenuComponent, InstituteComponent, MedicalComponent, CertificationComponent, AngularjsComponent, AngularPlusComponent, AngularnineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
