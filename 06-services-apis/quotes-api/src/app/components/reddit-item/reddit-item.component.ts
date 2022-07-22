import { Component, Input, OnInit } from '@angular/core';
import { ChildData } from 'src/app/interfaces/reddit-api-model';

@Component({
  selector: 'app-reddit-item',
  templateUrl: './reddit-item.component.html',
  styleUrls: ['./reddit-item.component.css']
})
export class RedditItemComponent implements OnInit {

  @Input() post?: ChildData;

  constructor() { }

  ngOnInit(): void {
  }

}
