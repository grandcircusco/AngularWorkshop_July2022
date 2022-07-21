import { Component } from '@angular/core';
import { QuotesApiService } from './quotes-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-api';
  
  constructor(private quotesApiService: QuotesApiService) {

  }

  ngOnInit(): void {
    
  }

  // private quotesApiService: QuotesApiService;
  // constructor(quotesApiService: QuotesApiService) {
  //   this.quotesApiService = quotesApiService;
  // }
}
