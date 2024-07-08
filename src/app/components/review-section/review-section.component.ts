import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.css']
})
export class ReviewSectionComponent implements OnInit {
  reviewData: any;
  reviewId: number = 1;

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.fetchReview();
  }

  fetchReview() {
    this.reviewService.getReviewById(this.reviewId).subscribe({
      next: (res: any) => {
         console.log('Review data:', this.reviewData);
        this.reviewData = res;
       
      },
      error: (err: any) => {
        console.error('Error fetching review data:', err);
      }
    });
  }
}
