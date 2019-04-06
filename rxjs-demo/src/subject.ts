import { interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = interval(500).pipe(take(3));

const observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
};

const observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
};

const subject = new Subject();

subject.subscribe(observerA);

// subject subscribe source Observable as observer
source$.subscribe(subject);

setTimeout(() => {
  subject.subscribe(observerB);
}, 1000);

/*
console output:
A next: 0
A next: 1
B next: 1
A next: 2
B next: 2
A complete!
B complete!
*/
