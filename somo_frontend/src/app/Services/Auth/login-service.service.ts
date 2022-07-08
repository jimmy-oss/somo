import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { new_trainer } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  BASE_URL: string = 'http://localhost:8000/api/registration/trainer/'

  constructor(private http: HttpClient) { }

  registerTrainer(trainer: new_trainer) {
    return this.http.post(this.BASE_URL, trainer)
  }
}
