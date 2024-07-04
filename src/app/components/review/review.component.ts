import { Component } from '@angular/core';
import { ReviewSectionComponent } from '../review-section/review-section.component';


@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ReviewSectionComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

}
