import { Injectable } from '@angular/core';

import { BackendService } from './backend.service';
import { Logger } from './logger.service';
import { Person } from './person';

@Injectable()
export class PersonService {
  private personList: Person[] = [];

  constructor(private backend: BackendService, private logger: Logger) { }

  getPersonList() {
    this.backend.getAll(Person).then( (personList: Person[]) => {
      this.logger.info(`count ${personList.length} person.`);
      this.personList.push(...personList);
    });
    return this.personList;
  }
}
