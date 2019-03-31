import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { EmbeddedViewComponent } from './embedded-view.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    EmbeddedViewComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
