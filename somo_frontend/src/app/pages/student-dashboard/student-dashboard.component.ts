import { Component, OnInit } from '@angular/core';
import { AssignmentsServiceService } from 'src/app/Services/Assignments/assignments-service.service';
import { CoursesServicesService } from 'src/app/Services/courses/courses-services.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  all_courses: number = 0
  all_assignments: number = 0

  constructor(private coursesAPI: CoursesServicesService, private assignmentsAPI: AssignmentsServiceService) { }

  ngOnInit(): void {
    this.coursesAPI.getAllCourses().subscribe((data: any) => {
      this.all_courses = data.length
    })

    this.assignmentsAPI.getAllAssignments().subscribe((data: any) => {
      this.all_assignments = data.length
    })
  }

}
