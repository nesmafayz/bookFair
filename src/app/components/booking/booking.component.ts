import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import Swal from 'sweetalert2'; // Import SweetAlert2


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  id! : Number;
    formData = {
      phone: '',
      numberOfTicket: 1,
    };
    totalPrice: number = 5;
  
    ticketOptions: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
    ticketForm: FormGroup;
  
    constructor(private bookingService: BookingService) {
      this.ticketForm = new FormGroup({
        phone: new FormControl(this.formData.phone, [Validators.required]),
        numberOfTicket: new FormControl(this.formData.numberOfTicket, [Validators.required, Validators.min(1)]),
      });
  
      this.ticketForm.valueChanges.subscribe(value => {
        this.formData.phone = value.Phone;
        this.formData.numberOfTicket = value.numberOfTicket;
        this.updateTotalPrice();
      });
    }
  

    ngOnInit(): void {
      this.id = Number (localStorage.getItem('id'));
    }

    updateTotalPrice() {
      const ticketPrice = 5;
      this.totalPrice = this.formData.numberOfTicket * ticketPrice;
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
  
      this.bookingService.createTicket(this.formData).subscribe({
        next : (res : any) => {
          Swal.fire({
            icon: 'success',
            title: 'تم حجز التذكرة بنجاح!',
            showConfirmButton: false,
            timer: 1500 // Automatically close after 1.5 seconds
          });
          console.log('Ticket created:', res.data);

        },

        error : (err : any) => {
           console.error('Error creating ticket:', err.error);
           // Optionally, show an error message using SweetAlert2
           Swal.fire({
            icon: 'success',
            title: 'تم حجز التذكرة بنجاح!',
            showConfirmButton: false,
            timer: 3000 // Automatically close after 1.5 seconds
          });
         }
        })}
      }
