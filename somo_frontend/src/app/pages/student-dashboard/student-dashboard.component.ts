import { Component, OnInit } from '@angular/core';
import { AssignmentsServiceService } from 'src/app/Services/Assignments/assignments-service.service';
import { LogoutServiceService } from 'src/app/Services/Auth/logout-service.service';
import { CoursesServicesService } from 'src/app/Services/courses/courses-services.service';
import { StudentsServicesService } from 'src/app/Services/students-data/students-services.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  all_courses: number = 0
  all_assignments: number = 0
  current_student: any

  constructor(private coursesAPI: CoursesServicesService, private assignmentsAPI: AssignmentsServiceService, private studentsAPI: StudentsServicesService, private logoutAPI: LogoutServiceService) { }

  ngOnInit(): void {
    this.studentsAPI.getCurrentStudentData().subscribe(data => {
      this.current_student = data
    })

    this.coursesAPI.getAllCourses().subscribe((data: any) => {
      this.all_courses = data.length
    })

    this.assignmentsAPI.getAllAssignments().subscribe((data: any) => {
      this.all_assignments = data.length
    })
  }

  logout_user() {
    this.logoutAPI.logoutTrainer().subscribe(data => {
      console.log(data)
    })
  }

}
