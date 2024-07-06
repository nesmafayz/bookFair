import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { BookItemWithUserID } from '../../../models/book-item-with-user-id';
import { Cart } from '../../../models/cart';
import { ChangeQuantityDTO } from '../../../models/change-quantity-dto';
import { Modal } from 'bootstrap';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from '../bookstore/book-details/book-details.component';
import { SharedService } from '../../services/shared.service';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  paymentForm: FormGroup;
  book:any[] = [];

  constructor(private fb: FormBuilder, private cartService: CartService,private dataService: SharedService) {
    this.paymentForm = this.fb.group({
      cardHolderName: ['', [Validators.required, Validators.pattern(/^[\u0621-\u064A\s]+$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]]
    });
  }

  ngOnInit(): void {
    this.dataService.currentData.subscribe(data => this.book.push(data) );
      console.log(this.book);
    this.loadCartItems();
  }

  loadCartItems(): void {
   
    const cartId = 1; // Replace with the actual cart ID
    this.cartService.getAllItems(cartId).subscribe(items => {
      this.cartItems = items;
    });
  }


  deleteItem(item: any): void {
    let booksList = this.book.filter(i => !item);
    this.book = booksList;
  }

  decreaseQuantity(item: Cart): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateQuantity(item);
    }
  }

  increaseQuantity(item: Cart): void {
    item.quantity++;
    this.updateQuantity(item);
  }

  updateQuantity(item: Cart): void {
    const userData :BookItemWithUserID = {
    userId:"2",
    bookId : 1
    };
    const changeQuantityDto :ChangeQuantityDTO = { quantity: 1,BookItemWithUserID : userData }; // Replace with actual user ID
    this.cartService.changeQuantity(changeQuantityDto).subscribe();
  }

  handlePayment(): void {
    if (this.paymentForm.valid) {
      const modalElement = document.getElementById('successModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
       modal.show();
     } else {
        console.error("Element with ID 'successModal' not found.");
      }
    } else {
      this.paymentForm.markAllAsTouched();
    }
  }
  

  get cardHolderName() {
    return this.paymentForm.get('cardHolderName');
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber');
  }
}