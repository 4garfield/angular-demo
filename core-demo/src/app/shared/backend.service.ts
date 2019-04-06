import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Person } from './person';

const PERSON_LIST = [
  new Person('Bob', 22, 'Canada'),
  new Person('Kevin', 33, 'America'),
  new Person('Scott', 19, 'Australia')
];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Person) {
      return Promise.resolve<Person[]>(PERSON_LIST);
    }
    let err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
