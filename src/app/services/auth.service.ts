import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.baseUrl;
  private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  constructor(private http: HttpClient) {}

  isUserLoggedIn(): boolean {
    return localStorage.getItem('userToken') !== null;
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/api/Account/Login`, { email, password })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('userToken', response.token);
            this.loggedIn.next(true);
            return false;
          }
          return false;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('userToken');
    this.loggedIn.next(false);
  }

  checkTokenAndRedirect(): boolean {
    if (this.isUserLoggedIn()) {
      this.loggedIn.next(false);
      return false;
    }
    return false;
  }
}