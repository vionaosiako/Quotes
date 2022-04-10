import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRatingComponent } from './quote-rating.component';

describe('QuoteRatingComponent', () => {
  let component: QuoteRatingComponent;
  let fixture: ComponentFixture<QuoteRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
