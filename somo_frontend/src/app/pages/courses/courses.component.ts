import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesServicesService } from 'src/app/Services/courses/courses-services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  all_courses: any

  constructor(private coursesAPI: CoursesServicesService) { }

  ngOnInit(): void {
    this.coursesAPI.getAllCourses()?.subscribe((data: any) => {
      this.all_courses = data
      console.log(this.all_courses)
    })
  }

}
