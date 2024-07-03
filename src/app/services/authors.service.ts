import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private baseUrl = `${environment.baseUrl}/api/author`;

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getAuthorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createAuthor(author: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, author);
  }

  updateAuthor(id: number, author: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, author);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getAuthorsWithPagination(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Pagenation?page=${page}&pageSize=${pageSize}`);
  }

  searchAuthors(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Search?term=${term}`);
  }
}
