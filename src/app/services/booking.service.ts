import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Import AuthService
import { environment } from '../../environments/environment';  // Import environment variable

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = environment.baseUrl;  // API base URL from environment

  constructor(private http: HttpClient, private authService: AuthService) {}

  createTicket(newTicketDTO: any): Observable<any> {
    const headers = this.authService.getHeaders(); // Ensure authService is properly injected and used

    return this.http.post<any>(`${this.apiUrl}/api/Ticket`, newTicketDTO, { headers });
  }

  updateTicket(newTicketDTO: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Ticket`, newTicketDTO);
  }

  deleteTicket(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Ticket`);
  }
}
