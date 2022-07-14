import { Component, OnInit } from '@angular/core';
import { AssignmentsServiceService } from 'src/app/Services/Assignments/assignments-service.service';

@Component({
  selector: 'app-all-assignments',
  templateUrl: './all-assignments.component.html',
  styleUrls: ['./all-assignments.component.css']
})
export class AllAssignmentsComponent implements OnInit {

  all_assignments: any

  constructor(private assignmentsAPI: AssignmentsServiceService) { }

  ngOnInit(): void {
    this.assignmentsAPI.getAllAssignments()?.subscribe((data: any) => {
      this.all_assignments = data
      console.log(this.all_assignments)
    })
  }

}
