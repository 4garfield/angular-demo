import { asyncScheduler, Observable, Observer } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const observable$ = Observable
  .create( (observer:Observer<Number>) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

console.log('before subscribe');
observable$
  .pipe(
    observeOn(asyncScheduler)
  )
  .subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
  });
console.log('after subscribe');

/*
console output:
before subscribe
after subscribe
1
2
3
complete
*/
