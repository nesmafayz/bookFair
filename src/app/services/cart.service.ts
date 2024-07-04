import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';
import { IBook } from '../../models/ibook';
import { BookItemWithUserID } from '../../models/book-item-with-user-id';
import { ChangeQuantityDTO } from '../../models/change-quantity-dto';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'https://your-api-url/api/Cart';
  constructor(private http: HttpClient) { }
  getAllItems(cartId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/All?cartId=${cartId}`);
  }

  addItem(bookItemWithUserID: BookItemWithUserID): Observable<any> {
    return this.http.post(this.apiUrl, bookItemWithUserID);
  }

  deleteItem(bookItemWithUserID: BookItemWithUserID): Observable<any> {
    return this.http.delete(this.apiUrl, { body: bookItemWithUserID });
  }

  changeQuantity(changeQuantityDto: ChangeQuantityDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}/ChangeQuantity`, changeQuantityDto);
  }
}