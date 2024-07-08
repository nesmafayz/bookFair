import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient, private authService:AuthService) { }


  createOrder(UserId : any) : Observable<any>
  {
    const token = this.authService.getToken();  // Assuming you have a method to get the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/api/Order/${UserId}`, UserId , { headers });
  }
}
