import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Person } from '../person';

import { AllPeopleComponent } from './all-people.component';

describe('AllPeopleComponent', () => {
  let component: AllPeopleComponent;
  let fixture: ComponentFixture<AllPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('.addPerson', () => {
    it('should increase size of people array', () => {
      // Arrange
      const inputPerson = {} as Person;

      // Act
      component.addPerson(inputPerson);

      // Assert
      expect(component.people.length).toEqual(5);
    });

    it('should call Array.push', () => {
      // Arrange
      const inputPerson = {} as Person;
      let arraySpy = spyOn(component.people, 'push');

      // Act
      component.addPerson(inputPerson);

      // Assert
      expect(arraySpy).toHaveBeenCalled();
    });
  });

  describe('.deletePerson', () => {
    it('should call Array.splice with expected arguments', () => {
      // Arrange
      const indexInput = 2;
      let arraySpy = spyOn(component.people, 'splice');

      // Act
      component.deletePerson(indexInput);

      // Assert
      expect(arraySpy).toHaveBeenCalledWith(indexInput, 1);
    });
  });
});
