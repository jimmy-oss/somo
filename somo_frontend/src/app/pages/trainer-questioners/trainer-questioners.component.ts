import { Component, OnInit } from '@angular/core';
import { AssignmentsServiceService } from 'src/app/Services/Assignments/assignments-service.service';

@Component({
  selector: 'app-trainer-questioners',
  templateUrl: './trainer-questioners.component.html',
  styleUrls: ['./trainer-questioners.component.css']
})
export class TrainerQuestionersComponent implements OnInit {

  all_assignments: any

  constructor(private assignmentsAPI: AssignmentsServiceService) { }

  ngOnInit(): void {
    this.assignmentsAPI.getAllAssignments()?.subscribe((data: any) => {
      this.all_assignments = data
    })
  }
}
