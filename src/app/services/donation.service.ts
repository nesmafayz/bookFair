import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UsedBookDto } from '../../models/used-book-dto';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private apiUrl = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private authService:AuthService
  ) { }

  donateBook(book: UsedBookDto): Observable<UsedBookDto> {
    const token = this.authService.getToken();  // Assuming you have a method to get the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<UsedBookDto>(`${this.apiUrl}/api/Book/UsedBook`, book, { headers });
}
GetPaginatedBooks(pageNo: number, pageSize: number, include: string[]): Observable<any> {
  let params = new HttpParams()
    .set('pageNo', pageNo.toString())
    .set('pageSize', pageSize.toString());

  include.forEach((inc, index) => {
    params = params.append(`include[${index}]`, inc);
  });

  return this.http.get<any>(`${this.apiUrl}/api/Book/Paginated`, { params });
}



}
