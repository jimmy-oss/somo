import { Component, OnInit } from '@angular/core';
import { CoursesServicesService } from 'src/app/Services/courses/courses-services.service';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {

  all_courses: any

  constructor(private coursesAPI: CoursesServicesService) { }

  ngOnInit(): void {
    this.coursesAPI.getAllCourses()?.subscribe((data: any) => {
      this.all_courses = data
      console.log(this.all_courses)
    })
  }

}
