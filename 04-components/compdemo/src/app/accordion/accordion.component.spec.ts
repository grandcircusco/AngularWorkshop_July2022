import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.openPaneIndex = 1;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('.togglePane', () => {
    it('should set openPanelIndex to null when index input equals openPanelIndex', () => {
      // Act
      component.togglePane(1);

      // Assert
      expect(component.openPaneIndex).toBeNull();
    });

    it('should set openPanelIndex to index input when they are not equal', () => {
      // Act
      component.togglePane(2);

      // Assert
      expect(component.openPaneIndex).toEqual(2);
    });
  });
});
