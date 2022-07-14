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
import { TrainerQuestionersComponent } from './pages/trainer-questioners/trainer-questioners.component';
import { TrainerQuestioners1Component } from './pages/trainer-questioners1/trainer-questioners1.component';
import { TrainerQuestioners2Component } from './pages/trainer-questioners2/trainer-questioners2.component';
import { TrainerQuestioners3Component } from './pages/trainer-questioners3/trainer-questioners3.component';
import { TrainerQuestioners4Component } from './pages/trainer-questioners4/trainer-questioners4.component';
import { TrainerLoginComponent } from './pages/trainer-login/trainer-login.component';
import { TrainerRegistrationComponent } from './pages/trainer-registration/trainer-registration.component';
import { StudentQuizComponent } from './pages/student-quiz/student-quiz.component';
import { StudentQuiz1Component } from './pages/student-quiz1/student-quiz1.component';
import { StudentQuiz2Component } from './pages/student-quiz2/student-quiz2.component';
import { StudentQuiz3Component } from './pages/student-quiz3/student-quiz3.component';
import { StudentQuiz4Component } from './pages/student-quiz4/student-quiz4.component';
import { StudentResultsComponent } from './pages/student-results/student-results.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { AllAssignmentsComponent } from './pages/all-assignments/all-assignments.component';
 
 
 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent},
  {path:'trainers',component:TrainersComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'add-course',component:AddCourseComponent},
   {path:'all-assignments',component:AllAssignmentsComponent},
  {path:'student-profile',component:StudentProfileComponent},
  {path:'trainer-profile',component:TrainerProfileComponent},
  {path:'student-dashboard',component:StudentDashboardComponent},
  {path:'trainer-dashboard',component:TrainerDashboardComponent},
  {path:'trainer-login',component:TrainerLoginComponent},
  {path:'trainer-registration',component:TrainerRegistrationComponent},
  {path:'trainer-questioners',component:TrainerQuestionersComponent},
  {path:'trainer-questioners1',component:TrainerQuestioners1Component},
  {path:'trainer-questioners2',component:TrainerQuestioners2Component},
  {path:'trainer-questioners3',component:TrainerQuestioners3Component},
  {path:'trainer-questioners4',component:TrainerQuestioners4Component},
  {path:'student-quiz',component:StudentQuizComponent},
  {path:'student-result',component:StudentResultsComponent},
  {path:'student-quiz1',component:StudentQuiz1Component},
  {path:'student-quiz2',component:StudentQuiz2Component},
  {path:'student-quiz3',component:StudentQuiz3Component},
  {path:'student-quiz4',component:StudentQuiz4Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
