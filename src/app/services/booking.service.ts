import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Import AuthService
import { environment } from '../../environments/environment';  

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = environment.baseUrl;  

  constructor(private http: HttpClient, private authService: AuthService) {}

  createTicket(tiketData: any): Observable<any> {
    const headers = this.authService.getHeaders(); 
   const id = localStorage.getItem('id')
   tiketData.UserId = id;
    return this.http.post<any>(`${this.apiUrl}/api/Ticket`, tiketData , { headers });
  }

  updateTicket(newTicketDTO: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/Ticket`, newTicketDTO);
  }

  deleteTicket(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/Ticket`);
  }
}
