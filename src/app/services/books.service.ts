import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) {}

  getBooksList(pageNo:number,pageSize:number):Observable<any>{
  return  this.http.get<any>(`${environment.baseUrl}api/Book/Paginated?pageNo=${pageNo}&pagesize=${pageSize}`);
  }
}
