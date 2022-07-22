import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../../interfaces/quotes-api-model'

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  @Input() quotesList: Quote[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
