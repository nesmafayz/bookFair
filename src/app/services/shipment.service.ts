import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  // handleShipment() : Observable<any>
  // {

  // }
}
