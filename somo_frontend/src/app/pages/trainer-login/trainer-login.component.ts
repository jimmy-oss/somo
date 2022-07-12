import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/Auth/login-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css']
})
export class TrainerLoginComponent implements OnInit {

  constructor(private loginTrainerAPI: LoginServiceService, private router: Router) { }

  LoginTrainer(trainerForm: NgForm) {

    const login_data = trainerForm.value

    this.loginTrainerAPI.loginTrainer(login_data).subscribe(data => {
      if ("key" in data) {

        const user_details = {
          "username": login_data.username,
          "key": data.key
        }

        window.localStorage.setItem('user', JSON.stringify(user_details))

        this.router.navigate(['/trainer-dashboard'])
      }
    })
  }

  ngOnInit(): void {
  }

}
