import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsServiceService {

  BASE_URL: string = "http://localhost:8000/api/"

  key: any = window.localStorage.getItem("user")

  constructor(private http: HttpClient) { }

  getAllAssignments(): any {
    if (this.key) {
      const users_key = JSON.parse(this.key).key

      let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Token ${users_key}`)
      }

      return this.http.get(this.BASE_URL + "assignments/", header)
    }

    return null
  }
}
