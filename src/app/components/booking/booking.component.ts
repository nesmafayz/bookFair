import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  formData = {
    phone: '',
    numberOfTicket: 1,
    totalPrice: 5
  };

  ticketOptions: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

  constructor(private bookingService: BookingService) {}

  updateTotalPrice() {
    const ticketPrice = 5;
    this.formData.totalPrice = this.formData.numberOfTicket * ticketPrice;
  }

  onSubmit() {
    console.log('Form Data:', this.formData);
    
    // Call createTicket method from BookingService
    this.bookingService.createTicket(this.formData).subscribe(
      response => {
        console.log('Ticket created:', response);
        // Handle success response (if needed)
      },
      error => {
        console.error('Error creating ticket:', error);
        // Handle error response
      }
    );
  }
}