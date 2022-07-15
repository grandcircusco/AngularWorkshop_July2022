import { Component } from '@angular/core';
import { Candidate } from './interfaces/candidate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // add properties for data
  count = 0;
  candidates: Candidate[] = [
    { name: "Vanilla", color: "WhiteSmoke", votes: 2 },
    { name: "Chocolate", color: "SaddleBrown", votes: 3 },
    { name: "Strawberry", color: "LightPink", votes: 0 }
  ];

  // add methods to modify the data
  countUp(): void {
    this.count++;
  }

  addCount(amount: number): void {
    this.count += amount;
  }

  addVote(candidate: Candidate): void {
    candidate.votes++;
  }

  // addVote(index: number): void {
  //   this.candidates[index].votes++;
  // }
}
