import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import {StudentProfileComponent} from './pages/student-profile/student-profile.component';
import { TrainerProfileComponent } from './pages/trainer-profile/trainer-profile.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { TrainerDashboardComponent } from './pages/trainer-dashboard/trainer-dashboard.component';
 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent},
  {path:'trainers',component:TrainersComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'student-profile',component:StudentProfileComponent},
  {path:'trainer-profile',component:TrainerProfileComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'trainer-dashboard',component:TrainerDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
