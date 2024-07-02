import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']  // corrected here
})
export class CartComponent {
  cartItems = [
    {
      image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
      name: 'Basic T-shirt',
      size: 'M',
      color: 'Grey',
      quantity: 2
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  increaseQuantity(index: number) {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.cartItems[index].quantity > 0) {
      this.cartItems[index].quantity--;
    }
  }

  removeItem(index: number) {
    console.log(`Removing item at index: ${index}`);
    this.cartItems.splice(index, 1);
    console.log(`Updated cart items:`, this.cartItems);
    this.cdr.detectChanges();  // Trigger change detection
  }
}