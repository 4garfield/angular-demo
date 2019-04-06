import { Component, Input } from '@angular/core';

import { Person } from '../../shared/person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent {
  @Input() person: Person;
}
