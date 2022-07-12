import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { TrainerDashboardComponent } from './pages/trainer-dashboard/trainer-dashboard.component';
import { TrainerProfileComponent } from './pages/trainer-profile/trainer-profile.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterServiceService } from './Services/Auth/register-service.service';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { TrainerRegistrationComponent } from './pages/trainer-registration/trainer-registration.component';
import { TrainerLoginComponent } from './pages/trainer-login/trainer-login.component';
import { StudentQuizComponent } from './pages/student-quiz/student-quiz.component';
import { StudentResultsComponent } from './pages/student-results/student-results.component';
import { TrainerQuestionersComponent } from './pages/trainer-questioners/trainer-questioners.component';
import { StudentQuiz1Component } from './pages/student-quiz1/student-quiz1.component';
import { StudentQuiz2Component } from './pages/student-quiz2/student-quiz2.component';
import { StudentQuiz3Component } from './pages/student-quiz3/student-quiz3.component';
import { StudentQuiz4Component } from './pages/student-quiz4/student-quiz4.component';
import { TrainerQuestioners1Component } from './pages/trainer-questioners1/trainer-questioners1.component';
import { TrainerQuestioners2Component } from './pages/trainer-questioners2/trainer-questioners2.component';
import { TrainerQuestioners3Component } from './pages/trainer-questioners3/trainer-questioners3.component';
import { TrainerQuestioners4Component } from './pages/trainer-questioners4/trainer-questioners4.component';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    AdminComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    StudentDashboardComponent,
    StudentProfileComponent,
    TrainerDashboardComponent,
    TrainerProfileComponent,
    TrainersComponent,
    RegistrationComponent,
    LoginComponent,
    TrainerRegistrationComponent,
    TrainerLoginComponent,
    StudentQuizComponent,
    StudentResultsComponent,
    TrainerQuestionersComponent,
    StudentQuiz1Component,
    StudentQuiz2Component,
    StudentQuiz3Component,
    StudentQuiz4Component,
    TrainerQuestioners1Component,
    TrainerQuestioners2Component,
    TrainerQuestioners3Component,
    TrainerQuestioners4Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [RegisterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
