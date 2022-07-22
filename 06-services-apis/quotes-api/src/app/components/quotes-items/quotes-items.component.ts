import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quotes-api-model';

@Component({
  selector: 'app-quotes-items',
  templateUrl: './quotes-items.component.html',
  styleUrls: ['./quotes-items.component.css']
})
export class QuotesItemsComponent implements OnInit {

  @Input() quoteItem: Quote = {
    text: [],
    source:  "",
    sourceTagline: "",
    date: {
      year:  null,
      exact: null
    },
    photo: "",
    photoAttribution: "",
    details: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
