import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterServiceService } from 'src/app/Services/Auth/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-registration',
  templateUrl: './trainer-registration.component.html',
  styleUrls: ['./trainer-registration.component.css']
})
export class TrainerRegistrationComponent implements OnInit {

  constructor(private registerAPI: RegisterServiceService, private router: Router) { }

  registerTrainer(trainerForm: NgForm) {
    const trainer_data = trainerForm.value

    this.registerAPI.registerTrainer(trainer_data).subscribe(data => {
      if ("key" in data) {
        this.router.navigate(['/trainer-login'])
      }
    })
    
  }

  ngOnInit(): void {
  }

}
