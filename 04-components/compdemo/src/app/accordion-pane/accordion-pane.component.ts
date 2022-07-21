import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-pane',
  templateUrl: './accordion-pane.component.html',
  styleUrls: ['./accordion-pane.component.css']
})
export class AccordionPaneComponent implements OnInit {

  @Input() title = "";
  @Input() body = "";
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  handleToggle(): void {
    this.toggle.emit();
  }

}
