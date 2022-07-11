import { Component, OnInit } from '@angular/core';
import { LogoutServiceService } from 'src/app/Services/Auth/logout-service.service';
import { TrainersServicesService } from 'src/app/Services/trainers-data/trainers-services.service';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {

  current_trainer_data: any

  constructor(private trainersAPI: TrainersServicesService, private logoutAPI: LogoutServiceService) { }

  ngOnInit(): void {
    this.trainersAPI.getCurrentTrainerData().subscribe(data => {
      this.current_trainer_data = data
    })
  }

  logout_user() {
    this.logoutAPI.logoutTrainer().subscribe(data => {
      console.log(data)
    })
  }

}
