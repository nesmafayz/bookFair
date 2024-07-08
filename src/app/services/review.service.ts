
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) {}
  getReviewById(ReviuewId: number): Observable<any> {
    const url = `${environment.baseUrl}/api/Reviews/${ReviuewId}`;
    return this.http.get<any>(url);
}
}
