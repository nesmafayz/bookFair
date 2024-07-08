import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-reviews-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-reviews-all.component.html',
  styleUrls: ['./book-reviews-all.component.css']
})
export class BookReviewsAllComponent {
  reviews = [
    {
      title: 'Great Book!',
      timeAgo: '5 minutes ago',
      description: 'This book was amazing. I couldn’t put it down!',
      imageUrl: 'https://www.workitdaily.com/media-library/professional-man-creating-an-outstanding-personal-branding-statement.jpg?id=22025730&width=1200&height=600&coordinates=0%2C23%2C0%2C24'
    },
    {
      title: 'Interesting Read',
      timeAgo: '1 hour ago',
      description: 'The story was quite engaging and well-written.',
      imageUrl: 'https://example.com/image2.jpg'
    },
    {
      title: 'Not My Favorite',
      timeAgo: '3 hours ago',
      description: 'The book had some good moments but was not very captivating overall.',
      imageUrl: 'https://example.com/image3.jpg'
    },
    {
      title: 'A Must-Read!',
      timeAgo: '1 day ago',
      description: 'This is a must-read for fans of the genre. Highly recommended!',
      imageUrl: 'https://example.com/image4.jpg'
    },
    {
      title: 'Very Informative',
      timeAgo: '2 days ago',
      description: 'A very informative book with a lot of useful information.',
      imageUrl: 'https://example.com/image5.jpg'
    }
  ];
}
