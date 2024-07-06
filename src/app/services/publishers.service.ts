
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {

  constructor(private http:HttpClient) {}

  getPublisherList(pageNo:number,pageSize:number):Observable<any>{
  return  this.http.get<any>(`${environment.baseUrl}/api/Publisher/Paginated?pageNo=${pageNo}&pagesize=${pageSize}`);
  }



  getBookById(publisherId: number): Observable<any> {
    const url = `${environment.baseUrl}/api/Publisher/${publisherId}`;
    return this.http.get<any>(url);
  }
}
