import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PersonDetailComponent } from './person-detail.component';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('UI Buttons', () => {
    it('Edit button should call edit()', () => {
      // Arrange
      const editButton = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;

      // Act
      editButton.click();

      // Assert
      expect(component.showEdit).toBeTrue();
    });
  });

  describe('.edit()', () => {
    it('should set showEdit to true', () => {
      // Arrange - Nothing required

      // Act
      component.edit();

      // Assert
      expect(component.showEdit).toBeTrue();
    });
  })
});
