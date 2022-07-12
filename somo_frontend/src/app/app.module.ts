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
