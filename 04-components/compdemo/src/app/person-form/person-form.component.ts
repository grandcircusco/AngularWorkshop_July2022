import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input() showCancel = false;
  // Use a setter on the @Input to copy the starting values into the form
  @Input() set startingValues(person: Person) {
    this.currentFirst = person.firstName;
    this.currentLast = person.lastName;
  }
  @Output() personSave = new EventEmitter<Person>();
  @Output() formCancel = new EventEmitter<void>();

  currentFirst: string = '';
  currentLast: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.personSave.emit({ firstName: this.currentFirst, lastName: this.currentLast });
    this.currentFirst = '';
    this.currentLast = '';
  }

  cancel(): void {
    this.formCancel.emit();
  }

}
