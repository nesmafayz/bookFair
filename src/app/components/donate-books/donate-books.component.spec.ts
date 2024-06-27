import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonateBooksComponent } from './donate-books.component';

describe('DonateBooksComponent', () => {
  let component: DonateBooksComponent;
  let fixture: ComponentFixture<DonateBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
