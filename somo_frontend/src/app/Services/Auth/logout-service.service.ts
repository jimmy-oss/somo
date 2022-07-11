import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutServiceService {
  
  BASE_URL: string = 'http://localhost:8000/api/'

  key: any = window.localStorage.getItem("user")

  constructor(private http: HttpClient) { }

  logoutTrainer() {
    const users_key = JSON.parse(this.key).key

      let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Token ${users_key}`)
      }
    return this.http.get(this.BASE_URL + "logout/", header)
  }
}
