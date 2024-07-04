import { HttpClient } from '@angular/common/http';
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
    return this.http.post<UsedBookDto>(`${this.apiUrl}/api/UsedBook`, book);
}

}