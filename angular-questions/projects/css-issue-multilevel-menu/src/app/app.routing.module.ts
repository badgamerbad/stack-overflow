import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LocationComponent} from './location/location.component';
import {CourseComponent} from './course/course.component';
import { AngularComponent } from './course/angular/angular.component';
import { ReactComponent } from './course/react/react.component';
import { InstituteComponent } from './institute/institute.component';
import { MedicalComponent } from './institute/medical/medical.component';
import { CertificationComponent } from './institute/certification/certification.component';
import { AngularjsComponent } from './course/angular/angularjs/angularjs.component';
import { AngularPlusComponent } from './course/angular/angularplus/angularplus.component';
import { AngularnineComponent } from './course/angular/angularplus/angularnine/angularnine.component';
const routes: Routes = [
    // {path: '', component: AppComponent,pathMatch: 'full'},
    {path: 'location', component: LocationComponent},
    {path: 'courses', component: CourseComponent},
    {path: 'angular', component: AngularComponent},
    {path: 'react', component: ReactComponent},
    {path: 'institute', component: InstituteComponent},
    {path: 'medical', component: MedicalComponent},
    {path: 'certification', component: CertificationComponent},
    {path: 'angularplus', component: AngularPlusComponent},
    {path: 'angularjs', component: AngularjsComponent},
    {path: 'angularnine', component: AngularnineComponent},

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}