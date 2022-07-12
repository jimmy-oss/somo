import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/Auth/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginTrainerAPI: LoginServiceService, private router: Router) { }

  LoginStudent(loginForm: NgForm) {

    const login_data = loginForm.value

    this.loginTrainerAPI.loginStudent(login_data).subscribe(data => {
      if ("key" in data) {

        const user_details = {
          "username": login_data.username,
          "key": data.key
        }

        window.localStorage.setItem('user', JSON.stringify(user_details))

        this.router.navigate(['/student-dashboard'])
      }
    })
  }

  ngOnInit(): void {
  }

}
