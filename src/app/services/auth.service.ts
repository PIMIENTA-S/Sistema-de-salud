import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/auth';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class  AuthService {
  private baseUrl = 'assets/data/db.json';


  constructor(private http: HttpClient) { }

  // Registrar un usuario
  registerUser(user: User): Observable<User>{

    return this.http.post<User>(this.baseUrl, user);
  }
  
  // Obtener un usuario por su ID
  getUserById(id: number): Observable<User | undefined> {
    return this.http.get<{users: User[]}>(this.baseUrl).pipe(
      map(response => response.users.find(user => user.id === id))
    );
  }
}
