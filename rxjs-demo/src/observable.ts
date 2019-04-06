import { Observable, Observer } from 'rxjs';

const observable$ = Observable
  .create((observer: Observer<String>) => {
		observer.next('hello');
		observer.next('world');

    setTimeout(() => {
			observer.next('this step is async.');
		}, 100);
	});

console.log('start');
const subscription = observable$.subscribe((value) => {
	console.log(value);
})
console.log('end');

setTimeout(()=> {
  subscription.unsubscribe();
}, 200);

/*
console output:
start
hello
world
end
this step is async.
*/
