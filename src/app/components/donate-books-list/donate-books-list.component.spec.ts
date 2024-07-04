import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateBooksListComponent } from './donate-books-list.component';

describe('DonateBooksListComponent', () => {
  let component: DonateBooksListComponent;
  let fixture: ComponentFixture<DonateBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateBooksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
