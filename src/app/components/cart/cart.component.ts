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
import { Route, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

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
  userId! : string | null

  constructor(private fb: FormBuilder, private orderService : OrderService , private cartService: CartService, private dataService: SharedService, private router:Router) {
    this.paymentForm = this.fb.group({
      cardHolderName: ['', [Validators.required, Validators.pattern(/^[\u0621-\u064A\s]+$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]]
    });
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id')
    this.dataService.currentData.subscribe(data =>{
      if(data){
        this.book.push(data);
      }
    });
    this.cartService.getAllItems().subscribe(res =>{
       if(res){
       }
    });
  }

  deleteItem(item: any): void {
    this.book = this.book.filter(i => i !== item);
  }

  handlePayment(): void {
    if(this.book.length <= 0){
      alert("السلة فارغه");
    }
    if (this.paymentForm.valid &&this.book.length > 0) {
      const modalElement = document.getElementById('successModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
          this.orderService.createOrder(this.userId).subscribe({
            next : (res) => {
              console.log("order response" + res)
            }
          })
        modal.show();
        this.book=[];
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
  closeModel(){
    this.router.navigate(['/Home']);
  }
}
