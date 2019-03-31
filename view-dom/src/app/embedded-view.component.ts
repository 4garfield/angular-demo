import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'embedded-view',
  template: `
    <div>The component created inside a embedded view.</div>
  `
})
export class EmbeddedViewComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck is called on EmbeddedViewComponent');
  }
}
