import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  formData = {
    name: '',
    phone: '',
    tickets: 1,
    totalPrice: 5
  };

  ticketOptions: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

  updateTotalPrice() {
    const ticketPrice = 5;
    this.formData.totalPrice = this.formData.tickets * ticketPrice;
  }

  onSubmit() {
    console.log('Form Data:', this.formData);
    // Handle form submission logic here
  }
}
