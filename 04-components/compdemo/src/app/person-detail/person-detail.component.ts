import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  //@Input() firstName: string = '';
  //@Input() lastName: string = '';

  @Input() fullName: Person = {
    firstName: '',
    lastName: ''
  };
  @Output() personDelete = new EventEmitter<void>();

  showEdit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {
    this.showEdit = true;
  }

  save(newPerson:Person) {
    this.fullName.firstName = newPerson.firstName;
    this.fullName.lastName = newPerson.lastName;
    this.showEdit = false;
  }

  cancel() {
    this.showEdit = false;
  }

  delete() {
    this.personDelete.emit();
  }

}
