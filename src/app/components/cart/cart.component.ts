import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 items = [
    { imgUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp', type: 'Shirt', name: 'Cotton T-shirt', quantity: 1, price: 44.00 },
    { imgUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp', type: 'Shirt', name: 'Cotton T-shirt', quantity: 1, price: 44.00 },
    { imgUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp', type: 'Shirt', name: 'Cotton T-shirt', quantity: 1, price: 44.00 }
  ];
  shippingOption = '1';
  paymentMethod = 'cash';

  decreaseQuantity(item: any): void {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
  }

  removeItem(item: any): void {
    this.items = this.items.filter(i => i !== item);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalWithShipping(): number {
    let shippingCost = 0;
    if (this.shippingOption === '1') {
      shippingCost = 5;
    }
    return this.getTotal() + shippingCost;
  }

  lastItem(item: any): boolean {
    return this.items[this.items.length - 1] === item;
  }
}