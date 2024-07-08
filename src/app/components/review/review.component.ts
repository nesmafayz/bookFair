import { Component } from '@angular/core';
import { ReviewSectionComponent } from '../review-section/review-section.component';
import { BookReviewsAllComponent } from '../book-reviews-all/book-reviews-all.component';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ReviewSectionComponent,BookReviewsAllComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

}
