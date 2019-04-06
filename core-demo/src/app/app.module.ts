import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonListModule } from './+person-list/person-list.module';

import { BackendService } from './shared/backend.service';
import { Logger } from './shared/logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersonListModule,
    AppRoutingModule,
  ],
  providers: [
    BackendService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
