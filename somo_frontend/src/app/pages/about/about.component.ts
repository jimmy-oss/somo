import { Component, OnInit } from '@angular/core';
import { CoursesServicesService } from 'src/app/Services/courses/courses-services.service';
import { StudentsServicesService } from 'src/app/Services/students-data/students-services.service';
import { TrainersServicesService } from 'src/app/Services/trainers-data/trainers-services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  total_students: number = 0
  total_courses: number = 0
  total_trainers: number = 0

  constructor(private studentsAPI: StudentsServicesService, private coursesAPI: CoursesServicesService, private trainersAPI: TrainersServicesService) { }

  ngOnInit(): void {
    this.studentsAPI.getStudents().subscribe((data: any) => {
      this.total_students = data.length
    })

    this.coursesAPI.getAllCourses().subscribe((data: any) => {
      this.total_courses = data.length
    })

    this.trainersAPI.getTrainers().subscribe((data: any) => {
      this.total_trainers = data.length
    })
  }

}
