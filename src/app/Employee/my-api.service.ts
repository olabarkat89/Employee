import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL = 'https://task-dot-fe-task-428108.uc.r.appspot.com/employees';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(API_URL);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(API_URL, employee);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
  
}