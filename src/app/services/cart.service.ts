import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';
import { BookItemWithUserID } from '../../models/book-item-with-user-id';
import { ChangeQuantityDTO } from '../../models/change-quantity-dto';
import { environment } from '../../environments/environment.development';
import { BookIdDTO } from '../../models/book-id-dto';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient, private authService:AuthService) { }

  getAllItems(){
    return this.http.get(`${this.apiUrl}/api/Cart/All`);
  }

  addToCart(id: number): Observable<any> {
    const token = this.authService.getToken();  // Assuming you have a method to get the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/api/Cart/Buy-Regular-Book/${id}`, id, { headers });
  }


  deleteItem(bookId: BookIdDTO): Observable<any> {
    const options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        body: bookId
    };
    return this.http.delete(`${this.apiUrl}/api/Cart/Remove-item-from-Cart`, options);
}

  removeAllItems(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/Cart/Remove-All-items-from-Cart`);
  }

  changeQuantity(bookIdDto: BookIdDTO, quantity: number): Observable<any> {
    const params = new HttpParams()
      .set('quantity', quantity.toString());

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: params
    };

    return this.http.put(`${this.apiUrl}/api/Cart`, bookIdDto, options);
  }
}