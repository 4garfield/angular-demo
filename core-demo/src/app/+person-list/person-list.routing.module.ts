import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PersonListComponent } from './person-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'person', component: PersonListComponent, pathMatch: 'full' }
    ])
  ]
})
export class PersonListRoutingModule {}
