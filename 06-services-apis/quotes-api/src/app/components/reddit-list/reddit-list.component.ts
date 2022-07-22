import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/interfaces/reddit-api-model';
import { RedditApiService } from 'src/app/services/reddit-api.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit {

  posts: Child[] = [];

  constructor(private redditApiService: RedditApiService) { }

  ngOnInit(): void {
    this.redditApiService.fetchAww().subscribe(data => {
      this.posts = data.data.children;
    });
  }

}
