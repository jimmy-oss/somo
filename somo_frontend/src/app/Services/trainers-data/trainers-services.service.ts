import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainersServicesService {

  BASE_URL: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) { }

  key: any = window.localStorage.getItem("user")

  getTrainers(): any {
    if (this.key) {
      const users_key = JSON.parse(this.key).key

      let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Token ${users_key}`)
      }

      return this.http.get(this.BASE_URL + "trainers/", header)
    }

    return null
  }

  getCurrentTrainerData() {
    const users_key = JSON.parse(this.key).key

      let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Token ${users_key}`)
      }

      return this.http.get(this.BASE_URL + "current-loggedin-trainer/", header)
  }
}
