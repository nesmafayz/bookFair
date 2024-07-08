import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'https://localhost:7175/api/Reviews';

  constructor(private http: HttpClient) {}

  getReviewById(reviewId: number): Observable<any> {
    const url = `${this.apiUrl}/${reviewId}`;
    return this.http.get<any>(url);
  }

  getAllReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
