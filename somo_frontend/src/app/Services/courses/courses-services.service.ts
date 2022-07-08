import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesServicesService {

  BASE_URL: string = "http://localhost:8000/api/subjects/"

  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get(this.BASE_URL)
  }
}
