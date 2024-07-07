import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  formData = {
    phone: '',
    numberOfTicket: 1,
    totalPrice: 5
  };

  ticketOptions: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  ticketForm: FormGroup;

  constructor(private bookingService: BookingService) {
    this.ticketForm = new FormGroup({
      phone: new FormControl(this.formData.phone, [Validators.required]),
      numberOfTicket: new FormControl(this.formData.numberOfTicket, [Validators.required, Validators.min(1)]),
    });

    this.ticketForm.valueChanges.subscribe(value => {
      this.formData.phone = value.phone;
      this.formData.numberOfTicket = value.numberOfTicket;
      this.updateTotalPrice();
    });
  }

  updateTotalPrice() {
    const ticketPrice = 5;
    this.formData.totalPrice = this.formData.numberOfTicket * ticketPrice;
  }

  onSubmit() {
    if (this.ticketForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.formData = {
      ...this.formData,
      ...this.ticketForm.value
    };

    console.log('Form Data:', this.formData);
    
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
