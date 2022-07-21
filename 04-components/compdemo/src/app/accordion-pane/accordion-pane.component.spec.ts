import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPaneComponent } from './accordion-pane.component';

describe('AccordionPaneComponent', () => {
  let component: AccordionPaneComponent;
  let fixture: ComponentFixture<AccordionPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
