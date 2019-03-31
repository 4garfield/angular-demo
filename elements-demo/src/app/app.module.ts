import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AccordionComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(
      AccordionComponent,
      { injector: this.injector }
    );
    customElements.define('custom-accordion', element);
  }
}
