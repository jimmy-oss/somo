import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsServicesService {

  BASE_URL: string = "http://localhost:8000/api/"

  constructor(private http: HttpClient) { }

  key: any = window.localStorage.getItem("user")

  getStudents(): any {
    if (this.key) {
      const users_key = JSON.parse(this.key).key

      let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Token ${users_key}`)
      }

      return this.http.get(this.BASE_URL + "students/", header)
    }

    return null
  }

  getCurrentStudentData() {
    const users_key = JSON.parse(this.key).key

      let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Token ${users_key}`)
      }

      return this.http.get(this.BASE_URL + "current-loggedin-student/", header)
  }
}
