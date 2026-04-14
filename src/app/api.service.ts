import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://gorest.co.in/public/v2/users';
  // Use the API Key provided in the instructions
  private apiKey = 'c89f48aaaf1fa9874a9166e1d7779a082c17cba5f9fe0372e86122812b1e34bf';

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.apiKey}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, { headers: this.headers });
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://gorest.co.in/public/v2/posts', { headers: this.headers });
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, { headers: this.headers });
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    // Both PUT and PATCH are fine.
    return this.http.put<User>(`${this.apiUrl}/${id}`, user, { headers: this.headers });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}
