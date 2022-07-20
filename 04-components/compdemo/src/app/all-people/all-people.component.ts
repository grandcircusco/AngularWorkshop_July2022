import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent implements OnInit {

  people: Person[] = [
    { firstName: 'Fred', lastName: 'Franklin'},
    { firstName: 'Sally', lastName: 'Smith'},
    { firstName: 'Jamal', lastName: 'Johnson'},
    { firstName: 'Abdul', lastName: 'Amin'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addPerson(newPerson: Person) {
    this.people.push(newPerson);
  }

  deletePerson(index: number) {
    this.people.splice(index, 1);
  }

}
