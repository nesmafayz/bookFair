import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UsedBookDto } from '../../models/used-book-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private apiUrl = environment.baseUrl;

  constructor(
    private http : HttpClient,
  ) { }

  donateBook(book: UsedBookDto): Observable<UsedBookDto> {
    return this.http.post<UsedBookDto>(`${this.apiUrl}/api/Book/UsedBook`, book);
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