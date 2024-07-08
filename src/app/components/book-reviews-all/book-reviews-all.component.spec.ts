import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewsAllComponent } from './book-reviews-all.component';

describe('BookReviewsAllComponent', () => {
  let component: BookReviewsAllComponent;
  let fixture: ComponentFixture<BookReviewsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookReviewsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookReviewsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
