import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user_login_data } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  BASE_URL: string = 'http://localhost:8000/api/dj-rest-auth/login/'

  constructor(private http: HttpClient) { }

  loginTrainer(trainer: user_login_data) {
    return this.http.post<any>(this.BASE_URL, trainer)
  }
}
