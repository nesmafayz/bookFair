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
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  paymentForm: FormGroup;
  book: any[] = [];

  constructor(private fb: FormBuilder, private cartService: CartService, private dataService: SharedService) {
    this.paymentForm = this.fb.group({
      cardHolderName: ['', [Validators.required, Validators.pattern(/^[\u0621-\u064A\s]+$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]]
    });
  }

  ngOnInit(): void {
    debugger;
    this.dataService.currentData.subscribe(data => this.book.push(data));
    this.cartService.getAllItems().subscribe(res =>{
       if(res){
       }
    });
  }

  deleteItem(item: any): void {
    this.book = this.book.filter(i => i !== item);
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
