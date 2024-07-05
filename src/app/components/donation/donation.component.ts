import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  donatedBooks = [
    { name: 'Book 1', logo: 'https://st.depositphotos.com/1741875/1237/i/450/depositphotos_12376816-stock-photo-stack-of-old-books.jpg' },
    { name: 'Book 2', logo: 'https://st.depositphotos.com/1741875/1237/i/450/depositphotos_12376816-stock-photo-stack-of-old-books.jpg' },
    { name: 'Book 3', logo: 'https://st.depositphotos.com/1741875/1237/i/450/depositphotos_12376816-stock-photo-stack-of-old-books.jpg' },
    { name: 'Book 4', logo: 'https://st.depositphotos.com/1741875/1237/i/450/depositphotos_12376816-stock-photo-stack-of-old-books.jpg' },
    // Add more book objects as needed
  ];

}
