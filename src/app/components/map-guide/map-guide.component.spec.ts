import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGuideComponent } from './map-guide.component';

describe('MapGuideComponent', () => {
  let component: MapGuideComponent;
  let fixture: ComponentFixture<MapGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
