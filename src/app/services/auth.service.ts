import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User>{
    return this.http.post(`${this.baseUrl}/users`, user)
  }

  getUserById(id: number): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?id=${id}`)

  }
}
