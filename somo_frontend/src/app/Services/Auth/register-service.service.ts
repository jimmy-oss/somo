import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { new_user } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  BASE_URL: string = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) { }

  registerTrainer(trainer: new_user) {
    return this.http.post(this.BASE_URL + "registration/trainer/", trainer)
  }

  registerStudent(student: new_user) {
    return this.http.post(this.BASE_URL + "registration/student/", student)
  }

}
