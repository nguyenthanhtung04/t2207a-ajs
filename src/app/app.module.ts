import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {LoginComponent} from "./login.component/login.component";
import {RegisterComponent} from "./register.component/register.component";
import {Route,RouterModule, Routes} from "@angular/router";
import {ThoitietComponent} from "./thoitiet/thoitiet.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];
@NgModule({
  declarations: [
    AppComponent, ClassroomComponent, StudentComponent, TeacherComponent, LoginComponent, RegisterComponent, ThoitietComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
