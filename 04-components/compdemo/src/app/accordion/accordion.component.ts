import { Component, OnInit } from '@angular/core';
import { AccordionPaneData } from '../accordion-pane-data';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  panes: AccordionPaneData[] = [
    { title: "Hello", body: "Fine day!" },
    { title: "Enjoy", body: "Bon apetit!" },
    { title: "Goodbye", body: "Good night!" }
  ];
  openPaneIndex: number|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  togglePane(index: number): void {
    if (index === this.openPaneIndex) {
      this.openPaneIndex = null;
    } else {
      this.openPaneIndex = index;
    }
  }

}
