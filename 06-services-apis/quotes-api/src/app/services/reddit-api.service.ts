import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditResponse } from '../interfaces/reddit-api-model';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  // Dependency injection again to get an instance of HttpClient
  constructor(private http: HttpClient) { }

  fetchAww(): Observable<RedditResponse> {
    return this.http.get<RedditResponse>("https://www.reddit.com/r/aww/.json");
  }
}
