import { of, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

of(2)
  .pipe(
    map(v => v * 2)
  )
  .subscribe(
    v => console.log('as, ' + v)
  );
// console output: as, 4

interval(200)
  .pipe(
    take(3),
    map(n => n * 2),
    filter(n => n > 2)
  )
  .subscribe(
    n => console.log('as, ' + n)
  );
// console output: as, 4
