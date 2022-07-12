import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/Services/Auth/register-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registerAPI: RegisterServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  registerStudent(loginForm: NgForm) {
    const trainer_data = loginForm.value

    this.registerAPI.registerStudent(trainer_data).subscribe(data => {
      if ("key" in data) {
        this.router.navigate(['/login'])
      }
    })
  }

}
