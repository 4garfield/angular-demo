/**
 * Created by garfield on 2017/5/23.
 */
import { Component, Input } from '@angular/core';

import { Person } from '../../shared/person';

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent {
  @Input() person: Person;
}
