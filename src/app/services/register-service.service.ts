import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  register(userData:object):Observable<any>
  {
    return this.http.post(`${environment.baseUrl}/api/Account/register`, userData);


  }
}
