import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './+person-detail/person-detail.component';
import { PersonListRoutingModule } from './person-list.routing.module';

import { PersonService } from '../shared/person.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonListRoutingModule
  ],
  declarations: [
    PersonListComponent,
    PersonDetailComponent
  ],
  providers: [PersonService]
})
export class PersonListModule {}
