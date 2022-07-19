import { Component, Input, OnInit } from '@angular/core';
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

  currentFirst: string = '';
  currentLast: string = '';

  showEdit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {
    this.currentFirst = this.fullName.firstName;
    this.currentLast = this.fullName.lastName;
    this.showEdit = true;
  }

  save() {
    this.fullName.firstName = this.currentFirst;
    this.fullName.lastName = this.currentLast;
    this.showEdit = false;
  }

  cancel() {
    this.showEdit = false;
  }

}
