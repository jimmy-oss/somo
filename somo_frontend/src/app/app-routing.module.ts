import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import {StudentProfileComponent} from './pages/student-profile/student-profile.component';
import { TrainerProfileComponent } from './pages/trainer-profile/trainer-profile.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { TrainerDashboardComponent } from './pages/trainer-dashboard/trainer-dashboard.component';
import { TrainerLoginComponent } from './pages/trainer-login/trainer-login.component';
import { TrainerRegistrationComponent } from './pages/trainer-registration/trainer-registration.component';
import { StudentQuizComponent } from './pages/student-quiz/student-quiz.component';
import { StudentResultsComponent } from './pages/student-results/student-results.component';
 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent},
  {path:'trainers',component:TrainersComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'student-profile',component:StudentProfileComponent},
  {path:'trainer-profile',component:TrainerProfileComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'trainer-dashboard',component:TrainerDashboardComponent},
  {path:'trainer-login',component:TrainerLoginComponent},
  {path:'trainer-registration',component:TrainerRegistrationComponent},
  {path:'student-quiz',component:StudentQuizComponent},
  {path:'student-result',component:StudentResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
