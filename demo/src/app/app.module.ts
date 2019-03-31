/**
 * Created by garfield on 2017/5/23.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonDetailComponent } from './+person-list/+person-detail/person-detail.component';
import { PersonListComponent }   from './+person-list/person-list.component';
import { BackendService } from './shared/backend.service';
import { Logger } from './shared/logger.service';
import { PersonService } from './shared/person.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonListComponent,
  ],
  providers: [
    BackendService,
    Logger,
    PersonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
