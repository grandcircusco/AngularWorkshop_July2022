import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  // Use a setter on the @Input to copy the starting values into the form
  @Input() set startingValues(person: Person) {
    this.currentFirst = person.firstName;
    this.currentLast = person.lastName;
  }

  currentFirst: string = '';
  currentLast: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {

  }

  cancel(): void {

  }

}
