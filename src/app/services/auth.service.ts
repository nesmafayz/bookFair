// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService 
{
  private apiUrl = environment.baseUrl; 

  constructor(private http: HttpClient) {}

  isUserLoggedIn(): boolean {
    return localStorage.getItem('userToken') !== null;
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/api/Account/Login`, { email, password })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('userToken', response.token);
            return true;
          }
          return false;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('userToken');
  }
}
