import { Component } from '@angular/core';
import { QuotesApiService } from './quotes-api.service';
import { Quote } from './interfaces/quotes-api-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-api';
  quotes: Quote[] = [];

  // The constructor parameter shorthand below is equivalent to this...
  // private quotesApiService: QuotesApiService;
  // constructor(quotesApiService: QuotesApiService) {
  //   this.quotesApiService = quotesApiService;
  // }

  constructor(private quotesApiService: QuotesApiService) {
  }

  // ngOnInit is a special method called by Angular when the component first loads.
  ngOnInit(): void {
    // When the API call completes, the callback function in our subscribe is called.
    // The data from the API is passed as a parameter.
    this.quotesApiService.fetchAllQuotes().subscribe(data => {
      this.quotes = data;
    });
  }

}
