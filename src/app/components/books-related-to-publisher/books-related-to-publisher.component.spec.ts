import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRelatedToPublisherComponent } from './books-related-to-publisher.component';

describe('BooksRelatedToPublisherComponent', () => {
  let component: BooksRelatedToPublisherComponent;
  let fixture: ComponentFixture<BooksRelatedToPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksRelatedToPublisherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksRelatedToPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
