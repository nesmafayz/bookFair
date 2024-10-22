import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.baseUrl;
  private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());

  constructor(private http: HttpClient) {}

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(userData:object): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/Account/Login`, userData)
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.loggedIn.next(true); // Set logged-in state to true
            return response; // Return response for successful login
          }
          return null; // Return null for failed login
        }),
        catchError(error => {
          console.error('Login error:', error);
          return of(null); // Return null for failed login due to error
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, BehaviorSubject, of } from 'rxjs';
// import { environment } from '../../environments/environment';
// import { map, catchError } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private apiUrl = environment.baseUrl;
//   private loggedIn = new BehaviorSubject<boolean>(this.isUserLoggedIn());

//   constructor(private http: HttpClient) {}

//   isUserLoggedIn(): boolean {
//     return localStorage.getItem('token') !== null;
//   }

//   get isLoggedIn(): Observable<boolean> {
//     return this.loggedIn.asObservable();
//   }

//   login(userData:object): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/api/Account/Login`, userData)
//       .pipe(
//         map(response => {
//           if (response && response.token) {
//             localStorage.setItem('token', response.token);
//             this.loggedIn.next(true); // Set logged-in state to true
//             return response; // Return response for successful login
//           }
//           return null; // Return null for failed login
//         }),
//         catchError(error => {
//           console.error('Login error:', error);
//           return of(null); // Return null for failed login due to error
//         })
//       );
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//     this.loggedIn.next(false);
//   }

//   getHeaders(): HttpHeaders {
//     const token = localStorage.getItem('token');
//     return new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`
//     });
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }
// }