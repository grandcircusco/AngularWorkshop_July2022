import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesItemsComponent } from './quotes-items.component';

describe('QuotesItemsComponent', () => {
  let component: QuotesItemsComponent;
  let fixture: ComponentFixture<QuotesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
