import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quotes-api-model';

@Injectable({
  providedIn: 'root'
})
export class QuotesApiService {

  // Dependency injection again to get an instance of HttpClient
  constructor(private http: HttpClient) { }

  fetchAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>("https://dwolverton.github.io/juneteenth/public/api/quotes.json");
  }
}
