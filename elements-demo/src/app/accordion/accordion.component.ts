import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AccordionComponent {

  constructor() { }

  showContent: boolean = false;

  @Input() cardContent;

  @Output() action = new EventEmitter<string>();

  toggleContent() {
    this.showContent = !this.showContent;
    this.action.emit(this.cardContent);
  }
}
