/**
 * Created by garfield on 2017/5/23.
 */
import { Component, OnInit }   from '@angular/core';

import { Person }                from '../shared/person';
import { PersonService }         from '../shared/person.service';

@Component({
  selector:    'person-list',
  templateUrl: './person-list.component.html',
  providers:  [ PersonService ]
})
export class PersonListComponent implements OnInit {
  personList: Person[];
  selectedPerson: Person;

  constructor(private service: PersonService) { }

  ngOnInit() {
    this.personList = this.service.getPersonList();
  }

  selectPerson(person: Person) { this.selectedPerson = person; }
}
