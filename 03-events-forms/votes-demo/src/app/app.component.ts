import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // add properties for data
  count = 0;

  // add methods to modify the data
  countUp(): void {
    this.count++;
  }

  addCount(amount: number): void {
    this.count += amount;
  }
}
